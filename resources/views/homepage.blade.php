@extends("body")

@section("main")
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content">
                    <table class="table" id="table" data-locale="en-EN" data-toolbar=".toolbar" data-search="false"
                           data-show-refresh="true" data-show-toggle="true" data-show-columns="true" data-pagination="true"
                           data-resizable="true" data-sortable="false" data-show-search-clear-button="false" data-page-size=100 data-filter-control="true"
                           data-side-pagination="server" data-url="{{ url('getList') }}">
                        <thead>

                        <tr>
                            <th data-sortable="true" data-field="symbol" data-filter-control="input" data-formatter="stockNameSymbol">Symbol</th>
                            <th data-sortable="true" data-field="name" data-filter-control="input" data-formatter="stockName">Stock Name</th>
                            <th data-sortable="true" data-field="exchange" data-filter-control="select">Exchange</th>
                            {{-- 1min --}}
                            <th data-sortable="true" data-field="get1min.oscillatorsRating" data-formatter="stockFormatter">Osc R. (1min)</th>
                            <th data-sortable="true" data-field="get1min.ADX" data-formatter="stockFormatter">ADX (1min)</th>
                            <th data-sortable="true" data-field="get1min.AO" data-formatter="stockFormatter">AO (1min)</th>
                            <th data-sortable="true" data-field="get1min.ATR" data-formatter="stockFormatter">ATR (1min)</th>
                            <th data-sortable="true" data-field="get1min.CCI20" data-formatter="stockFormatter">CCI20 (1min)</th>
                            <th data-sortable="true" data-field="get1min.macdLevel" data-formatter="stockFormatter">macdLevel (1min)</th>
                            <th data-sortable="true" data-field="get1min.macdSignal" data-formatter="stockFormatter">macdSignal (1min)</th>
                            <th data-sortable="true" data-field="get1min.RSI14" data-formatter="stockFormatter">RSI14 (1min)</th>
                            <th data-sortable="true" data-field="get1min.stochK" data-formatter="stockFormatter">stochK (1min)</th>
                            <th data-sortable="true" data-field="get1min.stochD" data-formatter="stockFormatter">stochD (1min)</th>
                            {{-- 5min --}}
                            <th data-sortable="true" data-field="get5min.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (5min)</th>
                            <th data-sortable="true" data-field="get5min.ADX" data-formatter="stockFormatter" data-visible="false">ADX (5min)</th>
                            <th data-sortable="true" data-field="get5min.AO" data-formatter="stockFormatter" data-visible="false">AO (5min)</th>
                            <th data-sortable="true" data-field="get5min.ATR" data-formatter="stockFormatter" data-visible="false">ATR (5min)</th>
                            <th data-sortable="true" data-field="get5min.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (5min)</th>
                            <th data-sortable="true" data-field="get5min.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (5min)</th>
                            <th data-sortable="true" data-field="get5min.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (5min)</th>
                            <th data-sortable="true" data-field="get5min.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (5min)</th>
                            <th data-sortable="true" data-field="get5min.stochK" data-formatter="stockFormatter" data-visible="false">stochK (5min)</th>
                            <th data-sortable="true" data-field="get5min.stochD" data-formatter="stockFormatter" data-visible="false">stochD (5min)</th>
                            {{-- 15min --}}
                            <th data-sortable="true" data-field="get15min.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (15min)</th>
                            <th data-sortable="true" data-field="get15min.ADX" data-formatter="stockFormatter" data-visible="false">ADX (15min)</th>
                            <th data-sortable="true" data-field="get15min.AO" data-formatter="stockFormatter" data-visible="false">AO (15min)</th>
                            <th data-sortable="true" data-field="get15min.ATR" data-formatter="stockFormatter" data-visible="false">ATR (15min)</th>
                            <th data-sortable="true" data-field="get15min.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (15min)</th>
                            <th data-sortable="true" data-field="get15min.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (15min)</th>
                            <th data-sortable="true" data-field="get15min.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (15min)</th>
                            <th data-sortable="true" data-field="get15min.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (15min)</th>
                            <th data-sortable="true" data-field="get15min.stochK" data-formatter="stockFormatter" data-visible="false">stochK (15min)</th>
                            <th data-sortable="true" data-field="get15min.stochD" data-formatter="stockFormatter" data-visible="false">stochD (15min)</th>
                            {{-- 30min --}}
                            <th data-sortable="true" data-field="get30min.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (30min)</th>
                            <th data-sortable="true" data-field="get30min.ADX" data-formatter="stockFormatter" data-visible="false">ADX (30min)</th>
                            <th data-sortable="true" data-field="get30min.AO" data-formatter="stockFormatter" data-visible="false">AO (30min)</th>
                            <th data-sortable="true" data-field="get30min.ATR" data-formatter="stockFormatter" data-visible="false">ATR (30min)</th>
                            <th data-sortable="true" data-field="get30min.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (30min)</th>
                            <th data-sortable="true" data-field="get30min.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (30min)</th>
                            <th data-sortable="true" data-field="get30min.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (30min)</th>
                            <th data-sortable="true" data-field="get30min.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (30min)</th>
                            <th data-sortable="true" data-field="get30min.stochK" data-formatter="stockFormatter" data-visible="false">stochK (30min)</th>
                            <th data-sortable="true" data-field="get30min.stochD" data-formatter="stockFormatter" data-visible="false">stochD (30min)</th>
                            {{-- 1hour --}}
                            <th data-sortable="true" data-field="get1hour.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.ADX" data-formatter="stockFormatter" data-visible="false">ADX (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.AO" data-formatter="stockFormatter" data-visible="false">AO (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.ATR" data-formatter="stockFormatter" data-visible="false">ATR (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.stochK" data-formatter="stockFormatter" data-visible="false">stochK (1hour)</th>
                            <th data-sortable="true" data-field="get1hour.stochD" data-formatter="stockFormatter" data-visible="false">stochD (1hour)</th>
                            {{-- 2hour --}}
                            <th data-sortable="true" data-field="get2hour.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.ADX" data-formatter="stockFormatter" data-visible="false">ADX (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.AO" data-formatter="stockFormatter" data-visible="false">AO (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.ATR" data-formatter="stockFormatter" data-visible="false">ATR (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.stochK" data-formatter="stockFormatter" data-visible="false">stochK (2hour)</th>
                            <th data-sortable="true" data-field="get2hour.stochD" data-formatter="stockFormatter" data-visible="false">stochD (2hour)</th>
                            {{-- 4hour --}}
                            <th data-sortable="true" data-field="get4hour.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.ADX" data-formatter="stockFormatter" data-visible="false">ADX (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.AO" data-formatter="stockFormatter" data-visible="false">AO (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.ATR" data-formatter="stockFormatter" data-visible="false">ATR (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.stochK" data-formatter="stockFormatter" data-visible="false">stochK (4hour)</th>
                            <th data-sortable="true" data-field="get4hour.stochD" data-formatter="stockFormatter" data-visible="false">stochD (4hour)</th>
                            {{-- 1day --}}
                            <th data-sortable="true" data-field="get1day.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (1day)</th>
                            <th data-sortable="true" data-field="get1day.ADX" data-formatter="stockFormatter" data-visible="false">ADX (1day)</th>
                            <th data-sortable="true" data-field="get1day.AO" data-formatter="stockFormatter" data-visible="false">AO (1day)</th>
                            <th data-sortable="true" data-field="get1day.ATR" data-formatter="stockFormatter" data-visible="false">ATR (1day)</th>
                            <th data-sortable="true" data-field="get1day.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (1day)</th>
                            <th data-sortable="true" data-field="get1day.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (1day)</th>
                            <th data-sortable="true" data-field="get1day.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (1day)</th>
                            <th data-sortable="true" data-field="get1day.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (1day)</th>
                            <th data-sortable="true" data-field="get1day.stochK" data-formatter="stockFormatter" data-visible="false">stochK (1day)</th>
                            <th data-sortable="true" data-field="get1day.stochD" data-formatter="stockFormatter" data-visible="false">stochD (1day)</th>
                            {{-- 1week --}}
                            <th data-sortable="true" data-field="get1week.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (1week)</th>
                            <th data-sortable="true" data-field="get1week.ADX" data-formatter="stockFormatter" data-visible="false">ADX (1week)</th>
                            <th data-sortable="true" data-field="get1week.AO" data-formatter="stockFormatter" data-visible="false">AO (1week)</th>
                            <th data-sortable="true" data-field="get1week.ATR" data-formatter="stockFormatter" data-visible="false">ATR (1week)</th>
                            <th data-sortable="true" data-field="get1week.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (1week)</th>
                            <th data-sortable="true" data-field="get1week.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (1week)</th>
                            <th data-sortable="true" data-field="get1week.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (1week)</th>
                            <th data-sortable="true" data-field="get1week.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (1week)</th>
                            <th data-sortable="true" data-field="get1week.stochK" data-formatter="stockFormatter" data-visible="false">stochK (1week)</th>
                            <th data-sortable="true" data-field="get1week.stochD" data-formatter="stockFormatter" data-visible="false">stochD (1week)</th>
                            {{-- 1month --}}
                            <th data-sortable="true" data-field="get1month.oscillatorsRating" data-formatter="stockFormatter" data-visible="false">Osc R. (1month)</th>
                            <th data-sortable="true" data-field="get1month.ADX" data-formatter="stockFormatter" data-visible="false">ADX (1month)</th>
                            <th data-sortable="true" data-field="get1month.AO" data-formatter="stockFormatter" data-visible="false">AO (1month)</th>
                            <th data-sortable="true" data-field="get1month.ATR" data-formatter="stockFormatter" data-visible="false">ATR (1month)</th>
                            <th data-sortable="true" data-field="get1month.CCI20" data-formatter="stockFormatter" data-visible="false">CCI20 (1month)</th>
                            <th data-sortable="true" data-field="get1month.macdLevel" data-formatter="stockFormatter" data-visible="false">macdLevel (1month)</th>
                            <th data-sortable="true" data-field="get1month.macdSignal" data-formatter="stockFormatter" data-visible="false">macdSignal (1month)</th>
                            <th data-sortable="true" data-field="get1month.RSI14" data-formatter="stockFormatter" data-visible="false">RSI14 (1month)</th>
                            <th data-sortable="true" data-field="get1month.stochK" data-formatter="stockFormatter" data-visible="false">stochK (1month)</th>
                            <th data-sortable="true" data-field="get1month.stochD" data-formatter="stockFormatter" data-visible="false">stochD (1month)</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection


@section("footer")

    <script>
        function stockFormatter(value)
        {
            var newValue = Number(value).toFixed(4);

            return newValue;
        }
    </script>

    <script>
        function stockName(value, row)
        {
            var newValue = '<a href="{{url("stock")}}/'+row.symbol+'">'+row.name+'</a>';

            return newValue;
        }
    </script>

    <script>
        function stockNameSymbol(value, row)
        {
            var newValue = '<a href="{{url("stock")}}/'+row.symbol+'">'+row.symbol+'</a>';

            return newValue;
        }
    </script>

    <script>
        $("#table").bootstrapTable();
    </script>

@endsection
