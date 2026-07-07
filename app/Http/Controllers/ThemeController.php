<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use App\Http\Controllers\FileHandler;
use App\Models\CarouselImage;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ThemeController extends Controller
{
    private $model;
    public function __construct()
    {
       $this->model = Theme::class;
    }

    private function normalizeCarouselOrder(?array $order, array $newUrls = [], array $allUrls = []): array
    {
        $normalized = [];
        $newIndex = 0;

        foreach ($order ?? [] as $index => $item) {
            $id = $item['id'] ?? $item['url'] ?? null;

            if (($item['type'] ?? null) === 'new') {
                $tempIndex = $item['temp_index'] ?? $newIndex;
                $id = $newUrls[$tempIndex] ?? $newUrls[$newIndex] ?? null;
                $newIndex++;
            } elseif ($newUrls && is_numeric($id)) {
                $id = $newUrls[(int) $id] ?? null;
            }

            if ($id === null || $id === '') {
                continue;
            }

            $normalized[] = [
                'id' => $id,
                'position' => (int) ($item['position'] ?? ($index + 1)),
            ];
        }

        $orderedUrls = array_column($normalized, 'id');
        foreach ($allUrls as $url) {
            if (in_array($url, $orderedUrls, true)) {
                continue;
            }

            $normalized[] = [
                'id' => $url,
                'position' => count($normalized) + 1,
            ];
        }

        return $normalized;
    }

    private function sortCarouselImages(array $images, ?array $order): array
    {
        $positions = collect($order ?? [])
            ->filter(fn ($item) => !empty($item['id']))
            ->mapWithKeys(fn ($item) => [$item['id'] => (int) ($item['position'] ?? 999)])
            ->all();

        usort($images, function ($a, $b) use ($positions) {
            $aPosition = $positions[$a['url']] ?? 999;
            $bPosition = $positions[$b['url']] ?? 999;

            return $aPosition <=> $bPosition;
        });

        foreach ($images as &$image) {
            $image['position'] = $positions[$image['url']] ?? null;
        }

        //dd($images);
        return $images;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return view('colorTheme-page',compact('company'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $themes = Theme::all();

        return view('colorTheme-page', compact('themes'));
     
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $json = json_decode($request->input('json'), true);
        $order = json_decode($request->carousel_order, true);
        
        $json['user_id'] = Auth::id();
        
        $row = $this->model::create($json);

        FileHandler::upload('logo/img',$row->id,$request->file('logo'));
        FileHandler::upload('carousel',$row->id,$request->file('CarouselImgList'));

        $carouselImages = FileHandler::getFilesByID('carousel', $row->id);
        $newUrls = array_column($carouselImages, 'url');
        $normalizedOrder = $this->normalizeCarouselOrder($order, $newUrls, $newUrls);
        
        Theme::where('id', $row->id)->update(['position' => json_encode($normalizedOrder)]);
        $row->position = json_encode($normalizedOrder);

        $logData = $row->toArray();
        $logData['carousel_images'] = $this->sortCarouselImages($carouselImages, $normalizedOrder);
        
        $logos = FileHandler::getFilesByID('logo/img', $row->id);
        $logData['logo_img'] = $logos[0] ?? null;

        ActivityLog::create([
            'user_id' => Auth::id(),
            //'log_id' => $id,
            'theme_id' => $row->id,
            'action' => 'create',
            //'description' => 'Created a new theme',
            'description' => 'Created the theme: ',
            'old_values' => null,
            // 'new_values' => json_encode($row->toArray()),
            'new_values' => json_encode($logData),
            'ip_address' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ]);

        //dd(ActivityLog::all());
        //dd($logData);
        //dd($normalizedOrder);
        return response()->json($row);
    }

    /**
     * Display the specified resource.
     */
    public function show(Theme $theme)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Theme $theme)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
public function update(Request $request, $id){
    $json = json_decode($request->input('json'), true);
    $order = json_decode($request->carousel_order, true);
    $deleted = json_decode($request->input('deleted_carousel_images'), true) ?? [];
    
    // Delete removed carousel images
    foreach ($deleted as $url) {
        $relativePath = str_replace('/storage/', '', parse_url($url, PHP_URL_PATH));

        if (!str_starts_with($relativePath, 'uploads/carousel/')) {
            continue;
        }

        $fullPath = storage_path('app/public/' . $relativePath);

        if (file_exists($fullPath)) {
            unlink($fullPath);
        }
    }

    $theme = Theme::findOrFail($id);
    $oldOrder = json_decode($theme->position, true);
    $oldValues = $theme->toArray();

    $oldCarouselImages = FileHandler::getFilesByID('carousel', $theme->id);
    $oldValues['carousel_images'] = $this->sortCarouselImages(
        $oldCarouselImages,
        $oldOrder
    );
    
//     $oldValues['carousel_images'] = $this->sortCarouselImages(
//     FileHandler::getFilesByID('carousel', $theme->id),
//     $oldOrder
// );
// $oldValues['logo_img'] = FileHandler::getFilesByID('logo/img', $theme->id)[0] ?? null;


    // $old_logos = FileHandler::getFilesByID("logo/img",$theme->id);
    // $oldValues['logo_img'] = $old_logos[0] ?? null;

    $old_logos = FileHandler::getFilesByID("logo/img", $theme->id);
    $oldValues['logo_img'] = $old_logos[0]
    ? (is_array($old_logos[0]) ? $old_logos[0] : $old_logos[0]->toArray())
    : null;

    $existingImages = FileHandler::getFilesByID('carousel', $theme->id);
    $existingUrls = array_column($existingImages, 'url');

    // Update theme data before replacing files, then save normalized carousel order.
    $theme->update(array_merge($json, [
        'updated_by' => Auth::id(),
    ]));

    FileHandler::upload('carousel', $id, $request->file('CarouselImgList'));

    FileHandler::replaceFilesByID('logo/img', $id, $request->file('logo'));

    $allImages = FileHandler::getFilesByID('carousel', $theme->id);
    $allUrls = array_column($allImages, 'url');
    $newUrls = array_values(array_diff($allUrls, $existingUrls));
    $normalizedOrder = $this->normalizeCarouselOrder($order, $newUrls, $allUrls);

    $theme->update([
        'position' => json_encode($normalizedOrder),
    ]);

    $newValues = $theme->fresh()->toArray();
    //$newValues['carousel_images'] = $this->sortCarouselImages($allImages, $normalizedOrder);
    $newCarouselImages = FileHandler::getFilesByID('carousel', $theme->id);

    $newValues['carousel_images'] = $this->sortCarouselImages(
        $newCarouselImages,
        $normalizedOrder
    );
    $newLogos = FileHandler::getFilesByID('logo/img', $theme->id);
    $newValues['logo_img'] = $newLogos[0] ?? null;


    // ActivityLog::create([
    //     'user_id' => Auth::id(),
    //     'theme_id' => $theme->id,
    //     'action' => 'update',
    //     'description' => 'Updated the theme ',
    //     'old_values' => json_encode($oldValues),
    //     'new_values' => json_encode($theme->fresh()->toArray()),
    //     'ip_address' => $request->ip(),
    //     'user_agent' => $request->header('User-Agent'),
    // ]);
    
    
    ActivityLog::create([
        'user_id' => Auth::id(),
        'theme_id' => $theme->id,
        'action' => 'update',
        'description' => 'Updated the theme ',
        // 'old_values' => json_encode($oldValues),
        'old_values' => json_encode($oldValues),
        'new_values' => json_encode($newValues),
        'ip_address' => $request->ip(),
        'user_agent' => $request->header('User-Agent'),
    ]);
    

    //dd(ActivityLog::all());
    //dd($theme);
    //dd($normalizedOrder);
    //dd($logData);
    return response()->json([
        'success' => true,
        'message' => 'Theme updated successfully.',
        'theme' => $theme->fresh()
    ]);
}

    /**
     * Remove the specified resource from storage.
     */


public function destroy(Theme $theme, $id)
{
    return DB::transaction(function () use ($id, $theme) {
        $theme = Theme::where('user_id', Auth::id())->findOrFail($id);

        // toArray() before delete so old_values still has the full record
        $oldValues = $theme->toArray();

        $log = ActivityLog::create([
            'user_id' => Auth::id(),
            'theme_id' => $theme->id,
            'action' => 'delete',
            //'description' => 'Deleted theme: ' . ($theme->theme_name ?? ''),
            'description' => 'Deleted the theme ',
            'old_values' => json_encode($oldValues),
            'new_values' => null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->header('User-Agent'),
        ]);

        // If the log didn't actually persist, bail out — transaction rolls back
        if (!$log || !$log->exists) {
            throw new \RuntimeException('Failed to record activity log; theme not deleted.');
        }

        $theme->delete();
        return response()->json([
            'success' => true,
            'message' => 'Theme deleted successfully'
        ]);
        
    });
}

    public function updateActive(Request $request, $id)
    {
        $this->model::where("is_active",true)->update(["is_active"=>false]);
        $theme = Theme::findOrFail($id);

        $theme->is_active = $request->is_active;

        $theme->save();

        return response()->json([
            'success' => true,
            'message' => 'Status updated',
            'is_active' => $theme->is_active
        ]);
    }

  public function getAll()
{
    return response()->json(
        $this->model::with([
            'user' => function ($query) {
                $query->select('id', 'admin_name');
            },
            'updatedBy' => function ($query) {
                $query->select('id', 'admin_name');
            }
        ])->get()->map(function ($row) {

            $row['logo'] = FileHandler::getFilesByID('logo/img', $row['id']);
            $row['updated_by_name'] = $row->updatedBy?->admin_name;

            $images = FileHandler::getFilesByID('carousel', $row['id']);
            $order = json_decode($row['position'], true) ?? [];

            $row['carouselImg'] = $this->sortCarouselImages($images, $order);
            // dd($row);
            return $row;
        })
    );
}

public function getActive(){
    $activeTheme = Theme::where('is_active', true)->first();
    
    if ($activeTheme) {
        $activeTheme['logo'] = FileHandler::getFilesByID('logo/img', $activeTheme->id);

        $images = FileHandler::getFilesByID('carousel', $activeTheme->id);
        $order = json_decode($activeTheme->position, true) ?? [];

        $activeTheme['carouselImg'] = $this->sortCarouselImages($images, $order);
    }

    return response()->json($activeTheme);
}

    // public function getFonts(){
    //     $response = Http::get('https://www.googleapis.com/webfonts/v1/webfonts', [
    //         'key' => env('GOOGLE_FONTS_API_KEY'),
    //         'sort' => 'popularity',
    //     ]);

    //     return response()->json($response->json()['items']);
    // }

    public function getFonts()
    {
        $fonts = Cache::remember('google_fonts', now()->addDays(1), function () {
            $response = Http::get('https://www.googleapis.com/webfonts/v1/webfonts', [
                'key' => env('GOOGLE_FONTS_API_KEY'),
                'sort' => 'popularity',
            ]);

            if ($response->failed()) {
                return [];
            }

            return $response->json()['items'] ?? [];
        });

        return response()->json($fonts);
    }

//     public function getActivityLogs()
//     {
//         $logs = ActivityLog::with('user:id,admin_name')
//             ->orderBy('created_at', 'desc')
//             ->get();
//        dd([
//     'old' => $logs->old_values,
//     'new' => $logs->new_values,
// ]);
//         return response()->json($logs);
//     }

public function getActivityLogs()
{
    $logs = ActivityLog::with([
        'user' => function ($query) {
            $query->select('id', 'admin_name');
        },
        'theme' => function ($query) {
            $query->select('id', 'theme_name', 'updated_by', 'updated_at');
        },
        'theme.updatedBy' => function ($query) {
            $query->select('id', 'admin_name');
        }
    ])->latest()->get();

    //$images = FileHandler::getFilesByID('carousel', $activeTheme->id);

    $logs = $logs->map(function ($log) {
        if ($log->action === 'update') {
            $log['User'] = $log->theme?->updatedBy?->admin_name
                ?? $log->user?->admin_name
                ?? "-";
        } else {
            $log['User'] = $log->user?->admin_name ?? "-";
        }
    // Determine theme name
        if ($log->theme) {
            $log['theme_name'] = $log->theme->theme_name;
        } elseif ($log->new_values) {
            $log['theme_name'] = json_decode($log->new_values, true)['theme_name'] ?? null;
        } elseif ($log->old_values) {
            $log['theme_name'] = json_decode($log->old_values, true)['theme_name'] ?? null;
        }

        return $log;
    });
    //dd($logs);
    return response()->json($logs);
}


}
