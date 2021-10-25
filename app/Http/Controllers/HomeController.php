<?php

namespace App\Http\Controllers;

use App\Models\Stocks;
use App\Models\stockScreener15min;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    public function index()
    {

        return view("homepage");
    }

    public function ajax_stock_POST(Request $request)
    {
        if (!isset($request->sort)) {
            $request->sort = "stocks.symbol";
        }
        if (!isset($request->order)) {
            $request->order = "asc";
        }
/* TODO: totalde sorun var, asagiya koydugumuz where u buraya koymadik */
        $total = Stocks::select('stocks.*', '15min.oscillatorsRating', '15min.ADX', '15min.AO', '15min.ATR', '15min.CCI20', '15min.macdLevel', '15min.macdSignal', '15min.mom', '15min.RSI14', '15min.stochK', '15min.stochD')
            ->join("stock_screener_15min as 15min", "stocks.id", "=", "15min.stockID")
            ->where(function ($query) use ($request) {
                $query
                    ->orWhere('stocks.symbol', 'like', '%' . $request->search . '%')
                    ->orWhere('stocks.name', 'like', '%' . $request->search . '%');
            })
            ->where(function ($query) use ($request) {
                if (isset($request->filter))
                {
                    $filterForCount =  json_decode($request->filter);
                    foreach ($filterForCount as $key => $rf)
                    {
                        if ($key != 'exchange')
                        {
                            $query
                                ->where('stocks.'.$key, 'like', '%' . $rf . '%');
                        }
                        else
                        {
                            $query
                                ->where('stocks.'.$key, '=', $rf);
                        }
                    }
                }
            })
            ->get()
            ->count();

        $query = Stocks::offset($request->offset)
            ->select('stocks.*', '15min.oscillatorsRating as oscillatorsRating', '15min.ADX as ADX', '15min.AO as AO', '15min.ATR as ATR', '15min.CCI20 as CCI20', '15min.macdLevel as macdLevel', '15min.macdSignal as macdSignal', '15min.mom as mom', '15min.RSI14 as RSI14', '15min.stochK as stochK', '15min.stochD as stochD')
            ->join("stock_screener_15min as 15min", "stocks.id", "=", "15min.stockID")
            ->limit($request->limit)
            ->orderBy($request->sort, $request->order)
            ->where(function ($query) use ($request) {
                $query
                    ->orWhere('stocks.symbol', 'like', '%' . $request->search . '%')
                    ->orWhere('stocks.name', 'like', '%' . $request->search . '%')
                    ->orWhere('stocks.exchange', 'like', '%' . $request->search . '%');
            })
            /* TODO: yukarida bahsettigim where burasi ama burada da veri bos gelince sikinti cikariyor, kontrol et */

            ->where(function ($query) use ($request) {
                if (isset($request->filter))
                {
                    $filterForData =  json_decode($request->filter);
                    foreach ($filterForData as $key => $rf)
                    {
                        if ($key != 'exchange')
                        {
                            $query
                                ->where('stocks.'.$key, 'like', '%' . $rf . '%');
                        }
                        else
                        {
                            $query
                                ->where('stocks.'.$key, '=', $rf);
                        }
                    }
                }
            })
            ->get();

        $data['rows'] = $query;
        $data['total'] = $total;
        $data['totalNotFiltered'] = $total;
        return response()->json($data);
    }

}
