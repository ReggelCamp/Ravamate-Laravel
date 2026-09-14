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
        return $this->belongsTo(DashboardModel::class, 'salesman_id');
    }

    public function transactions(){
        return $this->hasMany(Transaction::class, 'store_id', 'store_id');
    }
}