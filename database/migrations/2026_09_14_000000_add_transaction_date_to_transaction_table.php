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
        // The transaction model's transaction_date is the source of truth for
        // the dashboard's transaction dates, so the column must exist on the
        // transaction table.
        if (!Schema::hasColumn('transaction', 'transaction_date')) {
            Schema::table('transaction', function (Blueprint $table) {
                $table->dateTime('transaction_date')->nullable();
            });
        }
    }

    public function down(): void
    {
        Schema::table('transaction', function (Blueprint $table) {
            $table->dropColumn('transaction_date');
        });
    }
};