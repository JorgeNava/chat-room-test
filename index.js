const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set('port', process.env.PORT || 3000);
require('./sockets')(io);

console.log();
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});
