<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesmanModel extends Model
{
    use HasFactory;

    protected $table = 'salesman';

    protected $fillable = [
        'salesman_name', 
        'attendance',
        'target_mcp',
        'productive',
        'unproductive',
        'strike_rate',
        'selling_hrs',
        'sale',
    ];
}