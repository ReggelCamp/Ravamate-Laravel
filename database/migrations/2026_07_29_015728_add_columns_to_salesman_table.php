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
        Schema::table('salesman', function (Blueprint $table) {
            $table->string('or_no');
            $table->string('customer');
            $table->string('si_no');
            $table->string('si_amount');
            $table->string('check_date');
            $table->string('bank_code');
            $table->string('check_no');
            $table->string('amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('salesman', function (Blueprint $table) {
            $table->dropColumn([
                'or_no',
                'customer',
                'si_no',
                'si_amount',
                'check_date',
                'bank_code',
                'check_no',
                'amount',
            ]);
        });
    }
};
