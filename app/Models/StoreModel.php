<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreModel extends Model
{
    use HasFactory;

    protected $table = 'store';
    protected $primaryKey = 'store_id';
    protected $guarded = ['store_id'];

    public function salesman(){
        return $this->belongsTo(SalesmanModel::class, 'salesman_id', 'id');
    }

    public function transactions(){
        return $this->hasMany(Transaction::class, 'store_id', 'store_id');
    }

    // public function perSalesman(){
    //     return $this->hasOne(SalesmanModel::class, )
    // }
}