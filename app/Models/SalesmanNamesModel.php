<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesmanNamesModel extends Model
{
    use HasFactory;

    protected $table = 'Salesman_names';
    protected $guarded = ['id'];
    public $timestamps = false; 
    // public function salesman(){
    //     return $this->belongsTo(DashboardModel::class, 'salesman_id');
    // }

    // public function transactions(){
    //     return $this->hasMany(Transaction::class, 'store_id', 'store_id');
    // }
}