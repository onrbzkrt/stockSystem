<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset("css/bootstrap.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/all.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/jquery-confirm.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/bootstrap-table.min.css") }}">
{{--    <link rel="stylesheet" href="{{ asset("css/bootstrap-table-filter-control.scss") }}">--}}
    <link rel="stylesheet" href="{{ asset("css/bootstrap-datepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("css/bootstrap-daterangepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("css/bootstrap-material-datetimepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("css/timepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("css/bootstrap4-toggle.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/select2.css") }}">
    <link rel="stylesheet" href="{{ asset("css/app.css") }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">


    @yield("header")

    <title>{{ env('APP_NAME') }}@yield("title")</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <div class="container mb-3">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                {{--                <form class="form-inline my-2 my-lg-0">--}}
                {{--                    <input class="form-control mr-sm-2" type="search" placeholder="Search">--}}
                {{--                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>--}}
                {{--                </form>--}}
            </div>
        </nav>
    </div>

    @yield("header")
</head>

<body>
@yield("main")
</body>


<footer>

    <script src="{{ asset("js/jquery-3.5.1.min.js") }}"></script>
    <script src="{{ asset("js/popper.min.js") }}"></script>
    <script src="{{ asset("js/bootstrap.min.js") }}"></script>
{{--    <script src="{{ asset("js/bootstrap-table.min.js") }}"></script>--}}
{{--    <script src="{{ asset("js/bootstrap-table-filter.js") }}"></script>--}}
    <script src="{{ asset("js/jquery-confirm.min.js") }}"></script>
    <script src="{{ asset("js/bootstrap4-toogle.min.js") }}"></script>
    <script src="{{ asset("js/bootstrap-datepicker.js") }}"></script>
    <script src="{{ asset("js/select2.js") }}"></script>
    <script src="js/app.js"></script>

    {{--    <script src="{{ asset("js/bootstrap-table-locale-all.min.js") }}"></script>--}}

    <script>
        $("#table").bootstrapTable();
    </script>

@yield("footer")
</footer>
