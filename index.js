// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5540);
app.use('/static', express.static(__dirname + '.'));
// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'game.html'));
});
io.on('connection', function(socket) {
});
// Starts the server.
setInterval(function() {
  io.sockets.emit('message', 'hi!');
}, 1000);
server.listen(5540, function() {
  console.log('Starting server on port 5540');
});
