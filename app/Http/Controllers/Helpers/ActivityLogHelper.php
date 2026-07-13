<?php

namespace App\Http\Controllers\Helpers;
use App\Models\ActivityLog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivityLogHelper extends Controller
{
   public static function create($request, $others = []){
        
        $defaultArray = [
            'user_id' => Auth::id(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ];

        $group = array_merge($defaultArray,$others);

        ActivityLog::create($group);
   }
}
