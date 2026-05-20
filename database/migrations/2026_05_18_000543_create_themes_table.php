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
        Schema::create('themes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('theme_name')->nullable();
            $table->string('header_font')->nullable();
            $table->string('body_font')->nullable();
            $table->string('primary_color', 9)->nullable();
            $table->string('secondary_color', 9)->nullable();
            $table->string('accent_color', 9)->nullable();
            $table->string('background_color', 9)->nullable();
            $table->string('report_header', 255)->nullable();
            $table->string('header_title', 9)->nullable();
            $table->boolean('is_active')->default(false)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('themes');
    }
};
