<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use HasFactory;

  protected $guarded = ['id'];

  public function user()
  {
      return $this->belongsTo(User::class, 'user_id');
  }

  public function theme()
  {
      return $this->belongsTo(Theme::class, 'theme_id');
  }
  
}
