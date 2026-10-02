<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MustCarryModel extends Model
{
    use HasFactory;
    protected $table = 'must_carry';
    protected $guarded = ['id'];

    // public function product(){
    //     return $this->belongsTo(product::class,'product_id');
    // }
}