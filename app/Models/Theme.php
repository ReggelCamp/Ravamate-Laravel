<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;

      protected $fillable = [
        'theme_name',
        'primary_color',
        'secondary_color',
        'background_color',
        'accent_color',
        'header_font',
        'report_header',
        'body_font',
        'is_active',
    ];

}
