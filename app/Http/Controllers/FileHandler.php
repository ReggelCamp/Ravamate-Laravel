<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileHandler extends Controller
{
    static function upload($folder, $id, $file_array)
    {
        if(!empty($file_array)){
            $max = self::getMaxByID($folder, $id);

            foreach ($file_array as $key => $file) {
                $extension = $file->getClientOriginalExtension();
                $filename = "{$id}_{$max}.{$extension}";
                $file->storeAs("uploads/{$folder}", "ID{$filename}", 'public');
                $max++;
            }
        }  
    }

    static function getMaxByID($folder, $id)
    {
        $max = 0;

        if(self::getGlobalPath($folder,"ID{$id}_*")){
            $max = max(array_map(fn($n) => explode('_',explode('.',$n)[0])[1] ,array_map('basename', self::getGlobalPath($folder,"ID{$id}_*"))));
        }
        return $max + 1;
    }

    static function getFilesByID($folder, $id)
    {
        return array_map(function($path){
            return self::getFileInfo($path);
        }, self::getGlobalPath($folder, "ID{$id}_*"));
    }

    static function removeFilesByID($folder, $id)
    {
        try{
            $exists = self::getGlobalPath($folder, "ID{$id}_*");

            if (!empty($exists)) {
                array_map('unlink', $exists);
            }
        }
        catch(Exception $e) {}
    }

    static function replaceFilesByID($folder, $id, $file_array)
    {
        if(!empty($file_array)){
            self::removeFilesByID($folder, $id);
            self::upload($folder, $id, $file_array);
        }  
    }














    static function getFileByName($folder, $file_name)
    {
        $file = '';

        try{
            $file = self::getFileInfo((self::getGlobalPath($folder,$file_name.".*")[0]));
        }
        catch(Exception $e) {}
        
        return $file;
    }

    static function removeFileByName($folder, $file_name)
    {
        try{
            $exists = self::getGlobalPath($folder, "{$file_name}.*");

            if (!empty($exists)) {
                array_map('unlink', $exists);
            }
        }
        catch(Exception $e) {}
    }

    static function getGlobalPath($folder, $file){
        return glob(storage_path("app/public/uploads/{$folder}/{$file}"));
    }

    static function getFileInfo($path){
        return [
            'url' => Storage::url(str_replace(storage_path('app/public')."/", '', $path)),
            'created_at' => date('Y-m-d H:i:s', filectime($path)),
            'size' => self::calculateFileSize($path)
        ];
    }

    static function calculateFileSize($path){
        $size = filesize($path);

        if ($size < 1024) {
            $formatted_size = $size . ' B';
        } 
        elseif ($size < 1048576) {
            $formatted_size = round($size / 1024, 2) . ' KB';
        } 
        elseif ($size < 1073741824) {
            $formatted_size = round($size / 1048576, 2) . ' MB';
        } 
        else {
            $formatted_size = round($size / 1073741824, 2) . ' GB';
        }
        return $formatted_size;
    }

    static function replace($folder, $id, $file_array)
    {
        if(!empty($file_array)){
            $exists = self::getGlobalPath($folder, "ID{$id}_*"); 

            if (!empty($exists)) {
                array_map('unlink', $exists);
            }
            self::upload($folder,$id,$file_array);
        }  
    }

    static function replaceSpecific($folder, $file_name, $file_array)
    {
        if(!empty($file_array)){
            self::removeFileByName($folder, $file_name);

            foreach ($file_array as $key => $file) {
                $extension = $file->getClientOriginalExtension();
                $filename = "{$file_name}.{$extension}";
                $file->storeAs("uploads/{$folder}", "{$filename}", 'public');
            }
        }  
    }
}
