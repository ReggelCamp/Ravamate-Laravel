<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('syncdata', function (Blueprint $table) {
        $table->string('order_type')->nullable();
        $table->string('customercode')->nullable();
        $table->string('invoice_no')->nullable();
        $table->string('site')->nullable();
        $table->string('item_no')->nullable();
        $table->string('um')->nullable();
        $table->integer('quantity')->nullable();
        $table->string('reason_code')->nullable();
    });
}

public function down()
{
    Schema::table('syncdata', function (Blueprint $table) {
        $table->dropColumn(['order_type', 'customercode', 'invoice_no', 'site', 'item_no', 'um', 'quantity', 'reason_code']);
    });
}
};
