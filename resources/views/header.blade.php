    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset("public/css/bootstrap.min.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/all.min.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/jquery-confirm.min.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/bootstrap-table.min.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/bootstrap-datepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/bootstrap-daterangepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/bootstrap-material-datetimepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/timepicker.css") }}">
    <link rel="stylesheet" href="{{ asset("public/css/bootstrap4-toggle.min.css") }}">

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
