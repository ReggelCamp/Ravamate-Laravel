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
         return view('colorTheme-page');
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

        $row = $this->model::create($json);
        FileHandler::upload('logo/img',$row->id,$request->file('logo'));
        return response()->json($row);
        
        // $theme = Theme::create([
        //     'theme_name' => $request->theme_name,
        //     'primary_color' => $request->primary_color,
        //     'secondary_color' => $request->secondary_color,
        //     'background_color' => $request->background_color,
        //     'accent_color' => $request->accent_color,
        //     'header_font' => $request->header_font,
        //     'body_font' => $request->body_font,
        //     'activate_switch' => $request->is_active
        //     // 'is_active' => $request->boolean('is_active'),
        // ]);
        // return redirect()->back();
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
    //       $theme->update([
    //      'theme_name'       => $request->theme_name,
    //      'primary_color'    => $request->primary_color,
    //      'secondary_color'  => $request->secondary_color,
    //      'background_color' => $request->background_color,
    //      'accent_color'     => $request->accent_color,
    //      'header_font'      => $request->header_font,
    //      'body_font'        => $request->body_font,
    //  ]);

    //  return redirect()->back();
        $json = json_decode($request->input('json'), true);
        $this->model::find($id)->update($json);

        FileHandler::replaceFilesByID('logo/img',$id,$request->file('logo'));
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
            return $row;
        }));
    }

    public function getActive(){
        $activeTheme = Theme::where('is_active', true)->first();
        // return response()->json($activeTheme);
        if ($activeTheme) {
            $activeTheme['logo'] = FileHandler::getFilesByID('logo/img', $activeTheme->id);
        }

        return response()->json($activeTheme);
        
    }
}
