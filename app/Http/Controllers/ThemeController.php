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

class ThemeController extends Controller
{
    private $model;
    public function __construct()
    {
       $this->model = Theme::class;
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

        ActivityLog::create([
            'user_id' => Auth::id(),
            'theme_id' => $row->id,
            'action' => 'create',
            'description' => 'Created a new theme',
            'old_values' => null,
            'new_values' => json_encode($row->toArray()),
            'ip_address' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ]);

        FileHandler::upload('logo/img',$row->id,$request->file('logo'));
        FileHandler::upload('carousel',$row->id,$request->file('CarouselImgList'));

        
        Theme::where('id', $row->id)->update(['position' => json_encode($order)]);
        //dd(ActivityLog::all());
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
    
    $oldValues = $theme->toArray();
    
    // Update theme data, last updater, and carousel order
    $theme->update(array_merge($json, [
        'updated_by' => Auth::id(),
        'position'   => json_encode($order),
    ]));

    ActivityLog::create([
        'user_id' => Auth::id(),
        'theme_id' => $theme->id,
        'action' => 'update',
        'description' => 'Updated a theme',
        'old_values' => json_encode($oldValues),
        'new_values' => json_encode($theme->fresh()->toArray()),
        'ip_address' => $request->ip(),
        'user_agent' => $request->header('User-Agent'),
    ]);

    FileHandler::upload('carousel', $id, $request->file('CarouselImgList'));

    FileHandler::replaceFilesByID('logo/img', $id, $request->file('logo'));
    //dd(ActivityLog::all());
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
        $theme = Theme::where('user_id', Auth::id())->findOrFail($id);
        $theme->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'theme_id' => $theme->id,
            'action' => 'delete',
            'description' => 'Deleted a theme',
            'old_values' => json_encode($theme->toArray()),
            'new_values' => null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->header('User-Agent'),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Theme deleted successfully'
        ]);
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

            usort($images, function ($a, $b) use ($order) {
                $aIndex = array_search($a['url'], array_column($order, 'id'));
                $bIndex = array_search($b['url'], array_column($order, 'id'));

                return ($aIndex === false ? 999 : $aIndex)
                    <=> ($bIndex === false ? 999 : $bIndex);
            });

            $row['carouselImg'] = $images;

            return $row;
        })
    );
}

public function getActive(){
    $activeTheme = Theme::where('is_active', true)->first();
    
    if ($activeTheme) {
        $activeTheme['logo'] = FileHandler::getFilesByID('logo/img', $activeTheme->id);

        $images = FileHandler::getFilesByID('carousel', $activeTheme->id);
        $order = collect(json_decode($activeTheme->position, true) ?? [])->keyBy('id');

        usort($images, function ($a, $b) use ($order) {
            $aPosition = $order[$a['url']]['position'] ?? 999;
            $bPosition = $order[$b['url']]['position'] ?? 999;

            return $aPosition <=> $bPosition;
        });

        $activeTheme['carouselImg'] = $images;
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
    $logs = ActivityLog::with(['user', 'theme'])
        ->latest()
        ->get();
    return response()->json($logs);
}
}
