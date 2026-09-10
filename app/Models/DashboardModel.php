<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DashboardModel extends Model
{
    use HasFactory;

    protected $table = 'salesman';
    protected $guarded = ['id'];

    public function stores(){
        return $this->hasMany(StoreModel::class, 'salesman_id','id');
    }
    public function transactions(){
        return $this->hasMany(Transaction::class, 'salesman_id', 'id');
    }

}