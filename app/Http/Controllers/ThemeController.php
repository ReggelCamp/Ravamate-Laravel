<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Http\Request;
use App\Http\Controllers\FileHandler;
use App\Models\CarouselImage;
use Illuminate\Support\Facades\Http;

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
        
        $row = $this->model::create($json);
        
        FileHandler::upload('logo/img',$row->id,$request->file('logo'));
        FileHandler::upload('carousel',$row->id,$request->file('CarouselImgList'));

        
        Theme::where('id', $row->id)->update(['position' => json_encode($order)]);
      

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
    public function update(Request $request, $id)
    {
        $json = json_decode($request->input('json'), true);
        $order = json_decode($request->carousel_order, true);
        $deleted = json_decode($request->input('deleted_carousel_images'), true) ?? [];

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
      
        FileHandler::upload('carousel', $id, $request->file('CarouselImgList'));
        $this->model::find($id)->update($json);

        FileHandler::replaceFilesByID('logo/img',$id,$request->file('logo'));
    
        // if ($request->hasFile('CarouselImgList')) {
        //     FileHandler::replaceFilesByID('carousel',$id,$request->file('CarouselImgList'));
        // }

        Theme::where('id', $id)->update(['position' => json_encode($order)]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Theme $theme, $id)
    {
        $theme = Theme::findOrFail($id);
        $theme->delete();

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

  public function getAll(){
    return response()->json($this->model::all()->map(function($row){
        $row['logo'] = FileHandler::getFilesByID('logo/img', $row['id']);

        $images = FileHandler::getFilesByID('carousel', $row['id']);
        $order = json_decode($row['position'], true) ?? [];

        usort($images, function ($a, $b) use ($order) {
            $aIndex = array_search($a['url'], array_column($order, 'id'));
            $bIndex = array_search($b['url'], array_column($order, 'id'));

            return ($aIndex === false ? 999 : $aIndex) <=> ($bIndex === false ? 999 : $bIndex);
        });

        $row['carouselImg'] = $images;

        return $row;
    }));
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

    public function getFonts(){
        $response = Http::get('https://www.googleapis.com/webfonts/v1/webfonts', [
            'key' => env('GOOGLE_FONTS_API_KEY'),
            'sort' => 'popularity',
        ]);

        return response()->json($response->json()['items']);
    }

    // public function deleteCarouselImages(Request $request)
    // {
       

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Carousel images deleted successfully'
    //     ]);
    // }
}
