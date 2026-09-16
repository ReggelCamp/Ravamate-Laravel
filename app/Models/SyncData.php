<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SyncData extends Model
{
    use HasFactory;

    protected $table = 'syncdata';
    protected $guarded = ['id'];

}