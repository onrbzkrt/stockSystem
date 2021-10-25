<?php

use App\Models\Stocks;
use App\Models\CompanyOverview;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

function traidingQuery($val)
{
    $traindingQuery = array (
        'filter' =>
            array (
                0 =>
                    array (
                        'left' => 'name',
                        'operation' => 'nempty',
                    ),
            ),
        'options' =>
            array (
                'active_symbols_only' => true,
                'lang' => 'en',
            ),
        'markets' =>
            array (
                0 => 'america',
            ),
        'symbols' =>
            array (
                'query' =>
                    array (
                        'types' =>
                            array (
                            ),
                    ),
                'tickers' =>
                    array (
                    ),
            ),
        'columns' =>
            arraySortConf($val),
        'sort' =>
            array (
                'sortBy' => 'name',
                'sortOrder' => 'asc',
            ),
    );

    return $traindingQuery;
}

function arraySortConf($val)
{
    return array (
        0 => 'logoid',
        1 => 'name',
        2 => 'Recommend.Other'.$val,
        3 => 'ADX'.$val,
        4 => 'AO'.$val,
        5 => 'ATR'.$val,
        6 => 'CCI20'.$val,
        7 => 'MACD.macd'.$val,
        8 => 'MACD.signal'.$val,
        9 => 'Mom'.$val,
        10 => 'RSI'.$val,
        11 => 'Stoch.K'.$val,
        12 => 'Stoch.D'.$val,
        13 => 'description',
        14 => 'type',
        15 => 'subtype',
        16 => 'update_mode'.$val,
        17 => 'ADX+DI'.$val,
        18 => 'ADX-DI'.$val,
        19 => 'ADX+DI[1]'.$val,
        20 => 'ADX-DI[1]'.$val,
        21 => 'AO[1]'.$val,
        22 => 'AO[2]'.$val,
        23 => 'CCI20[1]'.$val,
        24 => 'Mom[1]'.$val,
        25 => 'RSI[1]'.$val,
        26 => 'Stoch.K[1]'.$val,
        27 => 'Stoch.D[1]'.$val,
        28 => 'currency',
        29 => 'fundamental_currency_code',
        30 => 'exchange',
        31 => 'country',
        32 => 'sector',
        33 => 'industry',
    );
}

function arraySort()
{
    return array (
        0 => 'logoid',
        1 => 'name',
        2 => 'Recommend.Other|1',
        3 => 'ADX|1',
        4 => 'AO|1',
        5 => 'ATR|1',
        6 => 'CCI20|1',
        7 => 'MACD.macd|1',
        8 => 'MACD.signal|1',
        9 => 'Mom|1',
        10 => 'RSI|1',
        11 => 'Stoch.K|1',
        12 => 'Stoch.D|1',
        13 => 'description',
        14 => 'type',
        15 => 'subtype',
        16 => 'update_mode|1',
        17 => 'ADX+DI|1',
        18 => 'ADX-DI|1',
        19 => 'ADX+DI[1]|1',
        20 => 'ADX-DI[1]|1',
        21 => 'AO[1]|1',
        22 => 'AO[2]|1',
        23 => 'CCI20[1]|1',
        24 => 'Mom[1]|1',
        25 => 'RSI[1]|1',
        26 => 'Stoch.K[1]|1',
        27 => 'Stoch.D[1]|1',
        28 => 'currency',
        29 => 'fundamental_currency_code',
        30 => 'exchange',
        31 => 'country',
        32 => 'sector',
        33 => 'industry',
    );
}

function arraySortAll()
{
    return array (
        0 => 'logoid',
        1 => 'name',
        2 => 'Recommend.Other|1',
        3 => 'ADX|1',
        4 => 'AO|1',
        5 => 'ATR|1',
        6 => 'CCI20|1',
        7 => 'MACD.macd|1',
        8 => 'MACD.signal|1',
        9 => 'Mom|1',
        10 => 'RSI|1',
        11 => 'Stoch.K|1',
        12 => 'Stoch.D|1',
        13 => 'description',
        14 => 'type',
        15 => 'subtype',
        16 => 'currency',
        17 => 'fundamental_currency_code',
        18 => 'exchange',
        19 => 'country',
        20 => 'sector',
        21 => 'industry',
        22 => 'ADX|5',
        23 => 'AO|5',
        24 => 'ATR|5',
        25 => 'CCI20|5',
        26 => 'MACD.macd|5',
        27 => 'MACD.signal|5',
        28 => 'Mom|5',
        29 => 'RSI|5',
        30 => 'Stoch.K|5',
        31 => 'Stoch.D|5',
        32 => 'industry',
        33 => 'ADX|15',
        34 => 'AO|15',
        35 => 'ATR|15',
        36 => 'CCI20|15',
        37 => 'MACD.macd|15',
        38 => 'MACD.signal|15',
        39 => 'Mom|15',
        40 => 'RSI|15',
        41 => 'Stoch.K|15',
        42 => 'Stoch.D|15',
        43 => 'industry',
        44 => 'ADX|30',
        45 => 'AO|30',
        46 => 'ATR|30',
        47 => 'CCI20|30',
        48 => 'MACD.macd|30',
        49 => 'MACD.signal|30',
        50 => 'Mom|30',
        51 => 'RSI|30',
        52 => 'Stoch.K|30',
        53 => 'Stoch.D|30',
        54 => 'industry',
        55 => 'ADX|60',
        56 => 'AO|60',
        57 => 'ATR|60',
        58 => 'CCI20|60',
        59 => 'MACD.macd|60',
        60 => 'MACD.signal|60',
        61 => 'Mom|60',
        62 => 'RSI|60',
        63 => 'Stoch.K|60',
        64 => 'Stoch.D|60',
        65 => 'industry',
        66 => 'ADX|120',
        67 => 'AO|120',
        68 => 'ATR|120',
        69 => 'CCI20|120',
        70 => 'MACD.macd|120',
        71 => 'MACD.signal|120',
        72 => 'Mom|120',
        73 => 'RSI|120',
        74 => 'Stoch.K|120',
        75 => 'Stoch.D|120',
        76 => 'industry',
        77 => 'ADX|240',
        78 => 'AO|240',
        79 => 'ATR|240',
        80 => 'CCI20|240',
        81 => 'MACD.macd|240',
        82 => 'MACD.signal|240',
        83 => 'Mom|240',
        84 => 'RSI|240',
        85 => 'Stoch.K|240',
        86 => 'Stoch.D|240',
        87 => 'industry',
        88 => 'ADX',
        89 => 'AO',
        90 => 'ATR',
        91 => 'CCI20',
        92 => 'MACD.macd',
        93 => 'MACD.signal',
        94 => 'Mom',
        95 => 'RSI',
        96 => 'Stoch.K',
        97 => 'Stoch.D',
        98 => 'industry',
        99 => 'ADX|1W',
        100 => 'AO|1W',
        101 => 'ATR|1W',
        102 => 'CCI20|1W',
        103 => 'MACD.macd|1W',
        104 => 'MACD.signal|1W',
        105 => 'Mom|1W',
        106 => 'RSI|1W',
        107 => 'Stoch.K|1W',
        108 => 'Stoch.D|1W',
        109 => 'industry',
        110 => 'ADX|1M',
        111 => 'AO|1M',
        112 => 'ATR|1M',
        113 => 'CCI20|1M',
        114 => 'MACD.macd|1M',
        115 => 'MACD.signal|1M',
        116 => 'Mom|1M',
        117 => 'RSI|1M',
        118 => 'Stoch.K|1M',
        119 => 'Stoch.D|1M',
        120 => 'industry',
    );
}

function findRowsName($key, $time)
{
    $rows = arraySortConf($time);

    return $rows[$key];
}

function findRowsNumber($val, $time)
{
    $rows = arraySortConf($time);

    foreach ($rows as $key=>$row)
    {
        if ($row == $val)
        {
            return $key;
        }
    }
}

function stockUpdate()
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

    $updateControl = 0;

    foreach($rows as $key=>$row)
    {
        if ($key != 0 && $key != ($howManyData - 1))
        {


            $data = (str_getcsv($row));
            $stockSym = $data[$insHelp['symbol']];
            $youHave = Stocks::where('symbol', $stockSym)->first();

            if (!isset($youHave) || empty($youHave) || $youHave == null)
            {
                $stock = new Stocks();
                $stock->symbol = $data[$insHelp['symbol']];
                $stock->name = $data[$insHelp['name']];
                $stock->exchange = $data[$insHelp['exchange']];
                $stock->assetType = $data[$insHelp['assetType']];
                $stock->ipoDate = $data[$insHelp['ipoDate']] != 'null' ? Carbon::parse($data[$insHelp['ipoDate']])->format('Y-m-d') : null;
                $stock->delishDate = $data[$insHelp['delishDate']] != 'null' ? Carbon::parse($data[$insHelp['delishDate']])->format('Y-m-d') : null;
                $stock->status = $data[$insHelp['status']] == 'Active' ? 1 : 0;

                $stock->save();

                if ($updateControl == 0)
                    $updateControl = 1;
            }
        }
    }
    echo $updateControl == 1 ? "Data updated" : "Data didn't update";
}

function companyOverwiev($symbol, $id)
{

    $youHave = CompanyOverview::where('stockID', $id)->first();

    $symbol = str_replace( ' ', '%20', $symbol);

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    $json = file_get_contents('https://www.alphavantage.co/query?function=OVERVIEW&amp;symbol='.$symbol.'&amp;apikey=66AKNUZ7AJXV3NFF');

    $data = json_decode($json, true);


    if (!empty($data) && !isset($data['Error Message'])) {
        /*
         * If in database. Adding data.
         */
        if (!isset($youHave) || empty($youHave) || $youHave == null)
        {
            if (isset($data['Information']))
                dd($data['Information']);

            $compOver = new CompanyOverview();

            $compOver->stockID = $id;
            $compOver->CIK = $data['CIK'] != "None" ? $data['CIK'] : null;
            $compOver->fiscalYearEnd = $data['FiscalYearEnd'] != "None" ? $data['FiscalYearEnd'] : null;
            $compOver->latestQuarter = $data['LatestQuarter'] != "None" && $data['LatestQuarter'] != '0000-00-00' ? $data['LatestQuarter'] : null;
            $compOver->marketCapitalization = $data['MarketCapitalization'] != "None" ? $data['MarketCapitalization'] : null;
            $compOver->EBITDA = $data['EBITDA'] != "None" ? $data['EBITDA'] : null;
            $compOver->PERatio = $data['PERatio'] != "None" ? $data['PERatio'] : null;
            $compOver->PEGRatio = $data['PEGRatio'] != "None" ? $data['PEGRatio'] : null;
            $compOver->bookValue = $data['BookValue'] != "None" ? $data['BookValue'] : null;
            $compOver->dividendPerShare = $data['DividendPerShare'] != "None" ? $data['DividendPerShare'] : null;
            $compOver->dividendYield = $data['DividendYield'] != "None" ? $data['DividendYield'] : null;
            $compOver->EPS = $data['EPS'] != "None" ? $data['EPS'] : null;
            $compOver->revenuePerShareTTM = $data['RevenuePerShareTTM'] != "None" ? $data['RevenuePerShareTTM'] : null;
            $compOver->profitMargin = $data['ProfitMargin'] != "None" ? $data['ProfitMargin'] : null;
            $compOver->operatingMarginTTM = $data['OperatingMarginTTM'] != "None" ? $data['OperatingMarginTTM'] : null;
            $compOver->returnOnAssetsTTM = $data['ReturnOnAssetsTTM'] != "None" ? $data['ReturnOnAssetsTTM'] : null;
            $compOver->returnOnEquityTTM = $data['ReturnOnEquityTTM'] != "None" ? $data['ReturnOnEquityTTM'] : null;
            $compOver->revenueTTM = $data['RevenueTTM'] != "None" ? $data['RevenueTTM'] : null;
            $compOver->grossProfitTTM = $data['GrossProfitTTM'] != "None" ? $data['GrossProfitTTM'] : null;
            $compOver->dilutedEPSTTM = $data['DilutedEPSTTM'] != "None" ? $data['DilutedEPSTTM'] : null;
            $compOver->quarterlyEarningsGrowthYOY = $data['QuarterlyEarningsGrowthYOY'] != "None" ? $data['QuarterlyEarningsGrowthYOY'] : null;
            $compOver->quarterlyRevenueGrowthYOY = $data['QuarterlyRevenueGrowthYOY'] != "None" ? $data['QuarterlyRevenueGrowthYOY'] : null;
            $compOver->analystTargetPrice = $data['AnalystTargetPrice'] != "None" ? $data['AnalystTargetPrice'] : null;
            $compOver->trailingPE = $data['TrailingPE'] != "None" ? $data['TrailingPE'] : null;
            $compOver->forwardPE = $data['ForwardPE'] != "None" ? $data['ForwardPE'] : null;
            $compOver->priceToSalesRatioTTM = $data['PriceToSalesRatioTTM'] != "None" ? $data['PriceToSalesRatioTTM'] : null;
            $compOver->priceToBookRatio = $data['PriceToBookRatio'] != "None" ? $data['PriceToBookRatio'] : null;
            $compOver->EVToRevenue = $data['EVToRevenue'] != "None" ? $data['EVToRevenue'] : null;
            $compOver->EVToEBITDA = $data['EVToEBITDA'] != "None" ? $data['EVToEBITDA'] : null;
            $compOver->beta = $data['Beta'] != "None" ? $data['Beta'] : null;
            $compOver->WeekHigh52 = $data['52WeekHigh'] != "None" ? $data['52WeekHigh'] : null;
            $compOver->WeekLow52 = $data['52WeekLow'] != "None" ? $data['52WeekLow'] : null;
            $compOver->DayMovingAverage50 = $data['50DayMovingAverage'] != "None" ? $data['50DayMovingAverage'] : null;
            $compOver->DayMovingAverage200 = $data['200DayMovingAverage'] != "None" ? $data['200DayMovingAverage'] : null;
            $compOver->sharesOutstanding = $data['SharesOutstanding'] != "None" ? $data['SharesOutstanding'] : null;
            $compOver->sharesFloat = $data['SharesFloat'] != "None" ? $data['SharesFloat'] : null;
            $compOver->sharesShort = $data['SharesShort'] != "None" ? $data['SharesShort'] : null;
            $compOver->sharesShortPriorMonth = $data['SharesShortPriorMonth'] != "None" ? $data['SharesShortPriorMonth'] : null;
            $compOver->shortRatio = $data['ShortRatio'] != "None" ? $data['ShortRatio'] : null;
            $compOver->shortPercentOutstanding = $data['ShortPercentOutstanding'] != "None" ? $data['ShortPercentOutstanding'] : null;
            $compOver->shortPercentFloat = $data['ShortPercentFloat'] != "None" ? $data['ShortPercentFloat'] : null;
            $compOver->percentInsiders = $data['PercentInsiders'] != "None" ? $data['PercentInsiders'] : null;
            $compOver->percentInstitutions = $data['PercentInstitutions'] != "None" ? $data['PercentInstitutions'] : null;
            $compOver->forwardAnnualDividendRate = $data['ForwardAnnualDividendRate'] != "None" ? $data['ForwardAnnualDividendRate'] : null;
            $compOver->forwardAnnualDividendYield = $data['ForwardAnnualDividendYield'] != "None" ? $data['ForwardAnnualDividendYield'] : null;
            $compOver->payoutRatio = $data['PayoutRatio'] != "None" ? $data['PayoutRatio'] : null;
            $compOver->dividendDate = $data['DividendDate'] != "None" && $data['DividendDate'] != '0000-00-00' ? $data['DividendDate'] : null;
            $compOver->exDividendDate = $data['ExDividendDate'] != "None" && $data['ExDividendDate'] != '0000-00-00' ? $data['ExDividendDate'] : null;
            $compOver->lastSplitFactor = $data['LastSplitFactor'] != "None" ? $data['LastSplitFactor'] : null;
            $compOver->lastSplitDate = $data['LastSplitDate'] != "None" && $data['LastSplitDate'] != '0000-00-00' ? $data['LastSplitDate'] : null;

            $compOver->save();
        } /*
         * If in not database. Updating data.
         */
        else {
            CompanyOverview::where("id", $youHave->id)->update(
                [
                    "CIK" => $data['CIK'] != "None" ? $data['CIK'] : null,
                    "fiscalYearEnd" => $data['FiscalYearEnd'] != "None" ? $data['FiscalYearEnd'] : null,
                    "latestQuarter" => $data['LatestQuarter'] != "None" && $data['LatestQuarter'] != '0000-00-00' ? $data['LatestQuarter'] : null,
                    "marketCapitalization" => $data['MarketCapitalization'] != "None" ? $data['MarketCapitalization'] : null,
                    "EBITDA" => $data['EBITDA'] != "None" ? $data['EBITDA'] : null,
                    "PERatio" => $data['PERatio'] != "None" ? $data['PERatio'] : null,
                    "PEGRatio" => $data['PEGRatio'] != "None" ? $data['PEGRatio'] : null,
                    "bookValue" => $data['BookValue'] != "None" ? $data['BookValue'] : null,
                    "dividendPerShare" => $data['DividendPerShare'] != "None" ? $data['DividendPerShare'] : null,
                    "dividendYield" => $data['DividendYield'] != "None" ? $data['DividendYield'] : null,
                    "EPS" => $data['EPS'] != "None" ? $data['EPS'] : null,
                    "revenuePerShareTTM" => $data['RevenuePerShareTTM'] != "None" ? $data['RevenuePerShareTTM'] : null,
                    "profitMargin" => $data['ProfitMargin'] != "None" ? $data['ProfitMargin'] : null,
                    "operatingMarginTTM" => $data['OperatingMarginTTM'] != "None" ? $data['OperatingMarginTTM'] : null,
                    "returnOnAssetsTTM" => $data['ReturnOnAssetsTTM'] != "None" ? $data['ReturnOnAssetsTTM'] : null,
                    "returnOnEquityTTM" => $data['ReturnOnEquityTTM'] != "None" ? $data['ReturnOnEquityTTM'] : null,
                    "revenueTTM" => $data['RevenueTTM'] != "None" ? $data['RevenueTTM'] : null,
                    "grossProfitTTM" => $data['GrossProfitTTM'] != "None" ? $data['GrossProfitTTM'] : null,
                    "dilutedEPSTTM" => $data['DilutedEPSTTM'] != "None" ? $data['DilutedEPSTTM'] : null,
                    "quarterlyEarningsGrowthYOY" => $data['QuarterlyEarningsGrowthYOY'] != "None" ? $data['QuarterlyEarningsGrowthYOY'] : null,
                    "quarterlyRevenueGrowthYOY" => $data['QuarterlyRevenueGrowthYOY'] != "None" ? $data['QuarterlyRevenueGrowthYOY'] : null,
                    "analystTargetPrice" => $data['AnalystTargetPrice'] != "None" ? $data['AnalystTargetPrice'] : null,
                    "trailingPE" => $data['TrailingPE'] != "None" ? $data['TrailingPE'] : null,
                    "forwardPE" => $data['ForwardPE'] != "None" ? $data['ForwardPE'] : null,
                    "priceToSalesRatioTTM" => $data['PriceToSalesRatioTTM'] != "None" ? $data['PriceToSalesRatioTTM'] : null,
                    "priceToBookRatio" => $data['PriceToBookRatio'] != "None" ? $data['PriceToBookRatio'] : null,
                    "EVToRevenue" => $data['EVToRevenue'] != "None" ? $data['EVToRevenue'] : null,
                    "EVToEBITDA" => $data['EVToEBITDA'] != "None" ? $data['EVToEBITDA'] : null,
                    "beta" => $data['Beta'] != "None" ? $data['Beta'] : null,
                    "WeekHigh52" => $data['52WeekHigh'] != "None" ? $data['52WeekHigh'] : null,
                    "WeekLow52" => $data['52WeekLow'] != "None" ? $data['52WeekLow'] : null,
                    "DayMovingAverage50" => $data['50DayMovingAverage'] != "None" ? $data['50DayMovingAverage'] : null,
                    "DayMovingAverage200" => $data['200DayMovingAverage'] != "None" ? $data['200DayMovingAverage'] : null,
                    "sharesOutstanding" => $data['SharesOutstanding'] != "None" ? $data['SharesOutstanding'] : null,
                    "sharesFloat" => $data['SharesFloat'] != "None" ? $data['SharesFloat'] : null,
                    "sharesShort" => $data['SharesShort'] != "None" ? $data['SharesShort'] : null,
                    "sharesShortPriorMonth" => $data['SharesShortPriorMonth'] != "None" ? $data['SharesShortPriorMonth'] : null,
                    "shortRatio" => $data['ShortRatio'] != "None" ? $data['ShortRatio'] : null,
                    "shortPercentOutstanding" => $data['ShortPercentOutstanding'] != "None" ? $data['ShortPercentOutstanding'] : null,
                    "shortPercentFloat" => $data['ShortPercentFloat'] != "None" ? $data['ShortPercentFloat'] : null,
                    "percentInsiders" => $data['PercentInsiders'] != "None" ? $data['PercentInsiders'] : null,
                    "percentInstitutions" => $data['PercentInstitutions'] != "None" ? $data['PercentInstitutions'] : null,
                    "forwardAnnualDividendRate" => $data['ForwardAnnualDividendRate'] != "None" ? $data['ForwardAnnualDividendRate'] : null,
                    "forwardAnnualDividendYield" => $data['ForwardAnnualDividendYield'] != "None" ? $data['ForwardAnnualDividendYield'] : null,
                    "payoutRatio" => $data['PayoutRatio'] != "None" ? $data['PayoutRatio'] : null,
                    "dividendDate" => $data['DividendDate'] != "None" && $data['DividendDate'] != '0000-00-00' ? $data['DividendDate'] : null,
                    "exDividendDate" => $data['ExDividendDate'] != "None" && $data['ExDividendDate'] != '0000-00-00' ? $data['ExDividendDate'] : null,
                    "lastSplitFactor" => $data['LastSplitFactor'] != "None" ? $data['LastSplitFactor'] : null,
                    "lastSplitDate" => $data['LastSplitDate'] != "None" && $data['LastSplitDate'] != '0000-00-00' ? $data['LastSplitDate'] : null,
                ]
            );
        }
    }
}

function allData()
{
    $allData = [];
    $all = Stocks::all();

    foreach ($all as $val)
    {
        $allData[$val->id] = $val->symbol;
    }

    return $allData;
}

function descriptionUpdate($symbol, $id)
{
    $symbol = str_replace( ' ', '%20', $symbol);

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    $json = file_get_contents('https://www.alphavantage.co/query?function=OVERVIEW&amp;symbol='.$symbol.'&amp;apikey=66AKNUZ7AJXV3NFF');

    $data = json_decode($json, true);

    if (!empty($data) && !isset($data['Error Message']))
    {
        if (isset($data['Information']))
            dd($data['Information']);

        Stocks::where("id", $id)->update(
                [
                    "description" => $data['Description'] != "None" ? $data['Description'] : null,
                    "currency" => $data['Currency'] != "None" ? $data['Currency'] : null,
                    "country" => $data['Country'] != "None" ? $data['Country'] : null,
                    "sector" => $data['Sector'] != "None" ? $data['Sector'] : null,
                    "industry" => $data['Industry'] != "None" ? $data['Industry'] : null,
                    "address" => $data['Address'] != "None" ? $data['Address'] : null,
                ]
            );
    }
}
