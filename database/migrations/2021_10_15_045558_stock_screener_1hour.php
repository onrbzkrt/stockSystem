<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class StockScreener1hour extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_screener_1hour', function (Blueprint $table) {
            $table->id();
            $table->integer('stockID');
            $table->float('oscillatorsRating', 16, 2)->nullable();
            $table->float('ADX', 16, 2)->nullable();
            $table->float('AO', 16, 2)->nullable();
            $table->float('ATR', 16, 2)->nullable();
            $table->float('CCI20', 16, 2)->nullable();
            $table->float('macdLevel', 16, 2)->nullable();
            $table->float('macdSignal', 16, 2)->nullable();
            $table->float('mom', 16, 2)->nullable();
            $table->float('RSI14', 16, 2)->nullable();
            $table->float('stochK', 16, 2)->nullable();
            $table->float('stochD', 16, 2)->nullable();
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
        Schema::dropIfExists('stock_screener_1hour');
    }
}
