<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('salesman', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('salesman_name');
            $table->string('attendance');
            $table->string('target_mcp');
            $table->string('productive');
            $table->string('unproductive');
            $table->string('strike_rate');
            $table->string('selling_hrs');
            $table->string('sale');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('salesman');
    }
};
