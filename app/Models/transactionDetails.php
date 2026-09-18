<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transactionDetails extends Model
{
    use HasFactory;

    protected $table = 'transaction_details';
    protected $guarded = ['id'];

    public function transaction(){
        return $this->belongsTo(Transaction::class,'transaction_id');
    }

    //     public function TransactionStore()
    // {
    //     return $this->belongsTo(
    //         StoreModel::class,
    //         'store_id',
    //         'store_id'
    //     );
    // }


    public function productDetails(){
        return $this->belongsTo(product::class, 'product_id', 'id');
    }
}
