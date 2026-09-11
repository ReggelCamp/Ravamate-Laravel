<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $guarded = ['id'];

    // public function transaction(){
    //     return $this->belongsTo(transactionDetails::class,'id');
    // }

    // public function loadProduct(){
    //     return $this->belongsTo(transactionDetails::class,'id');
    // }

    public function transactionDetails(){
        return $this->hasMany(
            transactionDetails::class,
            'product_id',
            'id'
        );
    }

}
