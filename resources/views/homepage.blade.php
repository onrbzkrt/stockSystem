@extends("body")

@section("main")
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content">

                    <table class="table" id="table" data-locale="en-EN" data-toolbar=".toolbar" data-search="false"
                           data-show-refresh="true" data-show-toggle="true" data-show-columns="true" data-pagination="true"
                           data-resizable="true" data-sortable="true" data-show-search-clear-button="false" data-page-size=100 data-filter-control="true"
                           data-side-pagination="server" data-url="{{ url('getList') }}">
                        <thead>

                        <tr>
                            <th data-sortable="true" data-field="symbol" data-filter-control="input">Symbol</th>
                            <th data-sortable="true" data-field="name" data-filter-control="input">Stock Name</th>
                            <th data-sortable="true" data-field="exchange" data-filter-control="select">Exchange</th>
                            <th data-sortable="true" data-field="oscillatorsRating" data-formatter="osciFormatter">Osc R.</th>
                            <th data-sortable="true" data-field="ADX" data-formatter="osciFormatter">ADX</th>
                            <th data-sortable="true" data-field="AO" data-formatter="osciFormatter">AO</th>
                            <th data-sortable="true" data-field="ATR" data-formatter="osciFormatter">ATR</th>
                            <th data-sortable="true" data-field="CCI20" data-formatter="osciFormatter">CCI20</th>
                            <th data-sortable="true" data-field="macdLevel" data-formatter="osciFormatter">macdLevel</th>
                            <th data-sortable="true" data-field="macdSignal" data-formatter="osciFormatter">macdSignal</th>
                            <th data-sortable="true" data-field="RSI14" data-formatter="osciFormatter">RSI14</th>
                            <th data-sortable="true" data-field="stochK" data-formatter="osciFormatter">stochK</th>
                            <th data-sortable="true" data-field="stochD" data-formatter="osciFormatter">stochD</th>
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
        function osciFormatter(osci)
        {
            var newOsci = Number(osci).toFixed(4);

            return newOsci;
        }
    </script>

@endsection
