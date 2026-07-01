<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;

      protected $fillable = [
        'user_id',
        'theme_name',
        'company_name',
        'primary_color',
        'secondary_color',
        'background_color',
        'accent_color',
        'body_color',
        'header_color',
        'header_font',
        'report_header',
        'body_font',
        'position',
        'is_active',
    ];
    
    public function user(){
      return $this->hasOne(User::class,'id','user_id');
    }
}
