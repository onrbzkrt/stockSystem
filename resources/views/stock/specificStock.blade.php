@extends("body")

@section("main")

   <div class="container">
       <div class="row" id="test">

       </div>
   </div>

@endsection

@section("footer")

    <script>
        $( document ).ready(function() {

            let ip_adress = "127.0.0.1";
            let socket_port = "3000";
            let socket = io(ip_adress + ":" + socket_port);

            {{--            socket.emit("connection", "{{ $symbol }}");--}}

            socket.emit('sendData', "{{ $symbol }}")

            socket.on("responseData", data => {

                // $("#stockName").html(data[0].name)
                $("#test").html(data)

                // var newDataArray = [];
                //
                // $.each( data.rows, function( key, value ) {
                //      newDataArray.push(value)
                // });

                // $("#table").bootstrapTable('load', newDataArray);
            })
        });

    </script>

@endsection
