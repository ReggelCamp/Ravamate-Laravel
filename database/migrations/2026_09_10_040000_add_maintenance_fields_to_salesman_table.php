<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('salesman', function (Blueprint $table) {
            $table->string('password')->nullable();
            $table->time('call_time')->nullable();
            $table->string('default_ord_type')->nullable();
            $table->decimal('loading_capacity', 12, 2)->default(0);
            $table->string('color', 7)->nullable();
            $table->string('contact_no', 25)->nullable();
            $table->string('cashier_no', 25)->nullable();
            $table->string('supervisor_name')->nullable();
            $table->string('supervisor_no', 25)->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('salesman', function (Blueprint $table) {
            $table->dropColumn([
                'password',
                'call_time',
                'default_ord_type',
                'loading_capacity',
                'color',
                'contact_no',
                'cashier_no',
                'supervisor_name',
                'supervisor_no',
            ]);
        });
    }
};
