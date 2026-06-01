<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Http\Request;
use App\Http\Controllers\FileHandler;

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
            $request->validate([
                'logo' => 'required',
                'logo.*' => 'image|mimes:jpg,jpeg,png,webp'
            ],[
                'logo.required' => 'Please upload a logo.',
                'logo.*.image' => 'Logo must be an image.',
                'logo.*.mimes' => 'Only JPG, JPEG, PNG, and WEBP files are allowed.',
            ]);
        
        $json = json_decode($request->input('json'), true);
     
        $row = $this->model::create($json);
        FileHandler::upload('logo/img',$row->id,$request->file('logo'));
        FileHandler::upload('carousel/img1',$row->id,$request->file('carouselImg1'));
        FileHandler::upload('carousel/img2',$row->id,$request->file('carouselImg2'));
        FileHandler::upload('carousel/img3',$row->id,$request->file('carouselImg3'));
        
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
        $this->model::find($id)->update($json);

        FileHandler::replaceFilesByID('logo/img',$id,$request->file('logo'));
        FileHandler::replaceFilesByID('carousel/img1',$id,$request->file('carouselImg1'));
        FileHandler::replaceFilesByID('carousel/img2',$id,$request->file('carouselImg2'));
        FileHandler::replaceFilesByID('carousel/img3',$id,$request->file('carouselImg3'));
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
            $row['logo'] = FileHandler::getFilesByID('logo/img',$row['id']);
            $row['carouselImg1'] = FileHandler::getFilesByID('carousel/img1',$row['id']);
            $row['carouselImg2'] = FileHandler::getFilesByID('carousel/img2',$row['id']);
            $row['carouselImg3'] = FileHandler::getFilesByID('carousel/img3',$row['id']);
            return $row;
        }));
    }

    public function getActive(){
        $activeTheme = Theme::where('is_active', true)->first();
        // return response()->json($activeTheme);
        if ($activeTheme) {
            $activeTheme['logo'] = FileHandler::getFilesByID('logo/img', $activeTheme->id);
            $activeTheme['carouselImg1'] = FileHandler::getFilesByID('carousel/img1', $activeTheme->id);
            $activeTheme['carouselImg2'] = FileHandler::getFilesByID('carousel/img2', $activeTheme->id);
            $activeTheme['carouselImg3'] = FileHandler::getFilesByID('carousel/img3', $activeTheme->id);
        }

        return response()->json($activeTheme);
        
    }
}
