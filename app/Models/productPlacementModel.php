<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productPlacementModel extends Model
{
    use HasFactory;
    protected $table = 'product_placement';
    protected $guarded = ['id'];

    // public function transaction(){
    //     return $this->belongsTo(transactionDetails::class,'id');
    // }

    // public function loadProduct(){
    //     return $this->hasMany(StoreModel::class,'store_id','id');
    // }

    // public function transactionDetails(){
    //     return $this->hasMany(
    //         transactionDetails::class,
    //         'product_id',
    //         'id'
    //     );
    // }

}
