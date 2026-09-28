<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class McpLayout extends Model
{
    use HasFactory;
    protected $table = 'mcp_layout';
    protected $guarded = ['id'];

    
    public function StoresDetails(){
        return $this->hasOne(StoreModel::class,'store_id','id');
    }

    public function SalesmanDetails(){
        return $this->hasOne(SalesmanModel::class,'id');
    }

}