<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DsrrModel extends Model
{
    use HasFactory;

    protected $table = 'salesman';

    protected $fillable = [
        'salesman_name', 
        'or_no',
        'customer',
        'si_no',
        'si_amount',
        'check_date',
        'bank_code',
        'check_no',
        'amount',
    ];
}