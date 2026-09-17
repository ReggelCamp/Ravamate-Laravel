<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesmanModel extends Model
{
    use HasFactory;

    protected $table = 'salesman';
    protected $guarded = ['id'];
    
    // protected $fillable = [
    //     'salesman_name',
    //     'password',
    //     'call_time',
    //     'default_ord_type',
    //     'loading_capacity',
    //     'color',
    //     'contact_no',
    //     'cashier_no',
    //     'supervisor_name',
    //     'supervisor_no',
    //     'or_no',
    //     'customer',
    //     'si_no',
    //     'si_amount',
    //     'check_date',
    //     'bank_code',
    //     'check_no',
    //     'amount',
    //     'attendance',
    //     'target_mcp',
    //     'productive',
    //     'unproductive',
    //     'strike_rate',
    //     'selling_hrs',
    //     'sale',
    // ];

    protected $hidden = ['password'];

    // public function stores(){
    //     return $this->hasMany(StoreModel::class, 'salesman_id');
    // }
}
