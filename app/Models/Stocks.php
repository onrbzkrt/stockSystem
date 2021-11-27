<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stocks extends Model
{
    use HasFactory;

    protected $table = "stocks";

    public function get1min()
    {
        return $this->hasOne(stockScreener1min::class, "stockID", "id");
    }

    public function get5min()
    {
        return $this->hasOne(stockScreener5min::class, "stockID", "id");
    }

    public function get15min()
    {
        return $this->hasOne(stockScreener15min::class, "stockID", "id");
    }

    public function get30min()
    {
        return $this->hasOne(stockScreener30min::class, "stockID", "id");
    }

    public function get1hour()
    {
        return $this->hasOne(stockScreener1hour::class, "stockID", "id");
    }

    public function get2hour()
    {
        return $this->hasOne(stockScreener2hour::class, "stockID", "id");
    }

    public function get4hour()
    {
        return $this->hasOne(stockScreener4hour::class, "stockID", "id");
    }

    public function get1day()
    {
        return $this->hasOne(stockScreener1day::class, "stockID", "id");
    }

    public function get1week()
    {
        return $this->hasOne(stockScreener1week::class, "stockID", "id");
    }

    public function get1month()
    {
        return $this->hasOne(stockScreener1month::class, "stockID", "id");
    }

    public function stockBase()
    {
        return $this->hasOne(StockBase::class, "stockID", "id");
    }
}
