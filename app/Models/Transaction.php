<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $table = 'transaction';
    protected $primaryKey = 'transaction_id';
    protected $guarded = ['transaction_id'];

    public function TransactionSalesman() {
        return $this->belongsTo(DashboardModel::class, 'salesman_id');
    }
    
    public function TransactionStore() {
        return $this->belongsTo(StoreModel::class, 'store_id');
    }
}
