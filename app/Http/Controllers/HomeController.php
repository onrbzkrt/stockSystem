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


        $query = Stocks::with("get1min", "get5min", "get15min", "get30min", "get1hour", "get2hour", "get4hour", "get1day", "get1week", "get1month")
            ->orderBy($request->sort, $request->order)
            ->where(function ($query) use ($request) {
                $query
                    ->orWhere('stocks.symbol', 'like', '%' . $request->search . '%')
                    ->orWhere('stocks.name', 'like', '%' . $request->search . '%')
                    ->orWhere('stocks.exchange', 'like', '%' . $request->search . '%');
            })
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
            });

        $total = $query->count();

        $result = $query
        ->offset($request->offset)
        ->limit($request->limit)
        ->get();


        $data['rows'] = $result;
        $data['total'] = $total;
        $data['totalNotFiltered'] = $total;

        return response()->json($data);
    }

}
