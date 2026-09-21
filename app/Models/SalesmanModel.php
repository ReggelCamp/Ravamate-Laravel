<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesmanModel extends Model
{
    use HasFactory;

    protected $table = 'salesman';
    protected $guarded = ['id'];
    
    protected $hidden = ['password'];

    public function salesmanTransactionDetails(){
        return $this->hasMany(transactionDetails::class,'id');
    }

    public function salesmanTransaction(){
        return $this->hasMany(Transaction::class,'transaction_id');
    }
}
