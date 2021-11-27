<?php

namespace App\Http\Controllers;

use App\Models\Stocks;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function specificStock(Request $request)
    {
        $stock = Stocks::where("symbol", $request->symbol)->first();

        if (isset($stock) && !empty($stock) && $stock != null)
        {
            $symbol = $stock->symbol;
        }
        else
        {
            abort(404);
        }

       return view("stock.specificStock", compact("symbol"));
    }

    public function specificStockSocket(Request $request)
    {
        $res = Stocks::with("stockBase", "get1min", "get5min", "get15min", "get30min", "get1hour", "get2hour", "get4hour", "get1day", "get1week", "get1month")
            ->where("stocks.symbol", $request->symbol)
            ->first();

        $view = view('stock.specificContent', compact("res"));

        return response()->json($view->render());
    }
}
