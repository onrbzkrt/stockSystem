<?php

namespace App\Http\Controllers;

use App\Models\Stocks;

use App\Models\stockScreener1min;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;

class IndexController extends Controller
{
    public function __construct()
    {
        set_time_limit(-1); //
    }

    public function index()
    {

        dd('test');
        return view("index");
    }

    public function getTraidingView($timer)
    {
//        dd($id);

        $timeInterval =
            [
                "1min"  =>  "|1",
                "5min"  =>  "|5",
                "15min"  =>  "|15",
                "30min"  =>  "|30",
                "1hour"  =>  "|60",
                "2hour"  =>  "|120",
                "4hour"  =>  "|240",
                "1day"  =>  '',
                "1week"  =>  "|1W",
                "1month"  => "|1M",
            ];

        $screenerTimer = "\App\Models\\stockScreener".$timer;

        $selectedTime = $timeInterval[$timer];

        $first = traidingQuery($selectedTime);

        $jsonParse = json_encode($first);

//        $response = Http::withBody('https://scanner.tradingview.com/america/scan', $jsonParse);

        $response = Http::withBody(
            $jsonParse, 'raw'
        )->get('https://scanner.tradingview.com/america/scan');


        $getBody = $response->body();

        if (isset($getBody) && $getBody != null && !empty($getBody))
        {
            $bodyParsed = json_decode($getBody);
            $i = 0;
            foreach ($bodyParsed->data as $key=>$val)
            {
                $i++;
                $data = $val->d;
                $symbolName = str_replace('.','-', $data[findRowsNumber('name', $selectedTime)]);

                $getStock = Stocks::where("symbol", $symbolName)->first();

                if (isset($getStock) && !empty($getStock) && $getStock != null)
                {
                    $stockID = $getStock->id;
                }
                else
                {
                    $stock = new Stocks();

                    $stock->symbol = $symbolName;
                    $stock->name = $data[findRowsNumber('description', $selectedTime)];
                    $stock->assetType = $data[findRowsNumber('type', $selectedTime)];
                    $stock->currency = $data[findRowsNumber('currency', $selectedTime)];
                    $stock->exchange = $data[findRowsNumber('exchange', $selectedTime)];
                    $stock->country = $data[findRowsNumber('country', $selectedTime)];
                    $stock->sector = $data[findRowsNumber('sector', $selectedTime)];
                    $stock->industry = $data[findRowsNumber('industry', $selectedTime)];

                    $stock->save();

                    $stockID = $stock->id;
                }

                $stockScreenCheck = $screenerTimer::where("stockID", $stockID)
                    ->first();

                if (isset($stockScreenCheck) && !empty($stockScreenCheck) && $stockScreenCheck != null)
                {
                    $screenerTimer::where("stockID", $stockID)
                        ->update(
                            [
                                "stockID" => $stockID,
                                "oscillatorsRating" => isset($data[findRowsNumber('Recommend.Other'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('Recommend.Other'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('Recommend.Other'.$selectedTime, $selectedTime)] : null,
                                "ADX" => isset($data[findRowsNumber('ADX'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('ADX'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('ADX'.$selectedTime, $selectedTime)] : null,
                                "AO" => isset($data[findRowsNumber('AO'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('AO'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('AO'.$selectedTime, $selectedTime)] : null,
                                "ATR" => isset($data[findRowsNumber('ATR'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('ATR'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('ATR'.$selectedTime, $selectedTime)] : null,
                                "CCI20" => isset($data[findRowsNumber('CCI20'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('CCI20'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('CCI20'.$selectedTime, $selectedTime)] : null,
                                "macdLevel" => isset($data[findRowsNumber('MACD.macd'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('MACD.macd'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('MACD.macd'.$selectedTime, $selectedTime)] : null,
                                "macdSignal" => isset($data[findRowsNumber('MACD.signal'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('MACD.signal'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('MACD.signal'.$selectedTime, $selectedTime)] : null,
                                "mom" => isset($data[findRowsNumber('MOM'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('MOM'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('MOM'.$selectedTime, $selectedTime)] : null,
                                "RSI14" => isset($data[findRowsNumber('RSI'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('RSI'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('RSI'.$selectedTime, $selectedTime)] : null,
                                "stochK" => isset($data[findRowsNumber('Stoch.K'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('Stoch.K'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('Stoch.K'.$selectedTime, $selectedTime)] : null,
                                "stochD" => isset($data[findRowsNumber('Stoch.D'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('Stoch.D'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('Stoch.D'.$selectedTime, $selectedTime)] : null,
                            ]
                        );
                }
                else
                {
                    $stocksScreen = new $screenerTimer();

                    $stocksScreen->stockID = $stockID;
                    $stocksScreen->oscillatorsRating = isset($data[findRowsNumber('Recommend.Other'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('Recommend.Other'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('Recommend.Other'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->ADX = isset($data[findRowsNumber('ADX'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('ADX'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('ADX'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->AO = isset($data[findRowsNumber('AO'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('AO'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('AO'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->ATR = isset($data[findRowsNumber('ATR'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('ATR'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('ATR'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->CCI20 = isset($data[findRowsNumber('CCI20'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('CCI20'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('CCI20'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->macdLevel = isset($data[findRowsNumber('MACD.macd'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('MACD.macd'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('MACD.macd'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->macdSignal = isset($data[findRowsNumber('MACD.signal'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('MACD.signal'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('MACD.signal'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->mom = isset($data[findRowsNumber('MOM'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('MOM'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('MOM'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->RSI14 = isset($data[findRowsNumber('RSI'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('RSI'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('RSI'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->stochK = isset($data[findRowsNumber('Stoch.K'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('Stoch.K'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('Stoch.K'.$selectedTime, $selectedTime)] : null;
                    $stocksScreen->stochD = isset($data[findRowsNumber('Stoch.D'.$selectedTime, $selectedTime)]) && !empty($data[findRowsNumber('Stoch.D'.$selectedTime, $selectedTime)]) ? $data[findRowsNumber('Stoch.D'.$selectedTime, $selectedTime)] : null;

                    $stocksScreen->save();

                }
            }
        }
        else
        {
            dd('Empty data');
        }

    }

    public function stockInsert()
    {
        // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
//        $json = file_get_contents('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=66AKNUZ7AJXV3NFF');
//        $json = file_get_contents('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=66AKNUZ7AJXV3NFF');
        $data = file_get_contents("https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=66AKNUZ7AJXV3NFF");
        $rows = explode("\n",$data);
        $howManyData = count($rows);
        $insHelp = [
            'symbol'   =>   0,
            'name'     =>   1,
            'exchange' =>   2,
            'assetType'=>   3,
            'ipoDate'  =>   4,
            'delishDate'=>  5,
            'status'    =>  6,
        ];

        foreach($rows as $key=>$row)
        {
            if ($key != 0 && $key != ($howManyData - 1))
            {
                $data = (str_getcsv($row));
                $stock = new Stocks();
                $stock->symbol = $data[$insHelp['symbol']];
                $stock->name = $data[$insHelp['name']];
                $stock->exchange = $data[$insHelp['exchange']];
                $stock->assetType = $data[$insHelp['assetType']];
                $stock->ipoDate = $data[$insHelp['ipoDate']] != 'null' ? Carbon::parse($data[$insHelp['ipoDate']])->format('Y-m-d') : null;
                $stock->delishDate = $data[$insHelp['delishDate']] != 'null' ? Carbon::parse($data[$insHelp['delishDate']])->format('Y-m-d') : null;
                $stock->status = $data[$insHelp['status']] == 'Active' ? 1 : 0;

                $stock->save();
            }
        }

        echo "All data inserted";
    }

    public function stockUpdate()
    {
        stockUpdate();
    }

    public function test()
    {
        if (isset($val) && !empty($val) && $val != null)
        {

        }


    }

    public function companyOverview()
    {
        $i = 0;
        $allStocks = allData();
        $startTime = Carbon::now();
        $sleepTime = 60;
//        dd($startTime);

        foreach ($allStocks as $key=>$stock)
        {
            if (isset($stock) && !empty($stock))
            {
                if ($i >= 75)
                {
                    $now = Carbon::now();
                    $totalDuration = $now->diffInSeconds($startTime);
                    if ($totalDuration <= $sleepTime)
                    {
                        sleep($sleepTime-$totalDuration);
                    }
                    $startTime = Carbon::now();
                    $i = 0;
                }
                companyOverwiev($stock, $key);
                $i++;
            }
        }
    }

    public function descriptionUpdate()
    {
        set_time_limit(-1);
        $i = 0;
        $allStocks = allData();
        $startTime = Carbon::now();
        $sleepTime = 60;
//        dd($startTime);

        foreach ($allStocks as $key=>$stock)
        {
            if (isset($stock) && !empty($stock))
            {
                if ($i >= 75)
                {
                    $now = Carbon::now();
                    $totalDuration = $now->diffInSeconds($startTime);
                    if ($totalDuration <= $sleepTime)
                    {
                        sleep($sleepTime-$totalDuration);
                    }
                    $startTime = Carbon::now();
                    $i = 0;
                }
                descriptionUpdate($stock, $key);
                $i++;
            }
        }
    }
}
