const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const router = express.Router();
const howManySecond = 10000;

const io = require("socket.io")(server, {
    cors: { origin: "*"}
})


io.on("connection", (socket) => {
    console.log("New connection")


    socket.on ('sendData', function (symbol) {
        var options = {
            host: 'localhost',
            port: 8000,
            path: '/stock/socket/' + symbol
        };


        var req = http.get(options, function(res) {

            // Buffer the body entirely for processing as a whole.
            var bodyChunks = [];
            res.on('data', function(chunk) {
                // You can process streamed parts here...
                bodyChunks.push(chunk);
            }).on('end', function() {
                var body = Buffer.concat(bodyChunks);
                socket.emit("responseData", JSON.parse(body));
            })
        });

        /* AJAX Start */
        setInterval(function(){

            var options = {
                host: 'localhost',
                port: 8000,
                path: '/stock/socket/' + symbol
            };


            var req = http.get(options, function(res) {

                // Buffer the body entirely for processing as a whole.
                var bodyChunks = [];
                res.on('data', function(chunk) {
                    // You can process streamed parts here...
                    bodyChunks.push(chunk);
                }).on('end', function() {
                    var body = Buffer.concat(bodyChunks);
                    socket.emit("responseData", JSON.parse(body));
                })
            });


            // req.on('error', function(e) {
            //     console.log('ERROR: ' + e.message);
            // });

        }, howManySecond);
        /* AJAX End */
    });

    socket.on("disconnect", (socket) => {
        console.log("Disconnect")
    })
})

server.listen(3000, () => {
    console.log("Server is running")
})
