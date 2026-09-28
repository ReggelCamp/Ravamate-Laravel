<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class McpLayout extends Model
{
    use HasFactory;
    protected $table = 'mcp_layout';
    protected $guarded = ['id'];

    
   public function SalesmanDetails()
    {
        return $this->belongsTo(
            SalesmanModel::class,
            'salesman_id',
            'id'
        );
    }

    public function StoreDetails()
    {
        return $this->belongsTo(
            StoreModel::class,
            'store_id',
            'store_id'
        );
    }

}