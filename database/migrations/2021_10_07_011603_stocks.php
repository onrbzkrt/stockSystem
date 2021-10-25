<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Stocks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->string('symbol')->nullable();
            $table->string('name')->nullable();
            $table->string('description', 2000)->nullable();
            $table->string('currency')->nullable();
            $table->string('exchange')->nullable();
            $table->string('assetType')->nullable();
            $table->string('country')->nullable();
            $table->string('sector')->nullable();
            $table->string('industry')->nullable();
            $table->string('address', 2000)->nullable();
            $table->string('fiscalYearEnd')->nullable();
            $table->date('ipoDate')->nullable();
            $table->date('delishDate')->nullable();
            $table->boolean('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stocks');
    }
}
