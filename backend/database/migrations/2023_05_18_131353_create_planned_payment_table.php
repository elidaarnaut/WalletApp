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
        Schema::create('planned_payments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('typeofpayment');
            $table->foreignId('subcategoryid')->nullable;
            $table->foreignId('categoryid');
            $table->decimal('amount');
            $table->foreignId('userid');
            $table->integer('frequency');
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planned_payments');
    }
};
