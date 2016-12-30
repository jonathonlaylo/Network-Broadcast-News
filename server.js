/*jshint esversion: 6 */
const net = require('net');
const HOST = '0.0.0.0';
const PORT = 6969;
var users = [];
var username = null;

let server = net.createServer((socket) => {

  socket.setEncoding('utf8');
  socket.write('testing client write');
  socket.on('data',  (chunk)=>{
    // socket.write(chunk);
    console.log(`client: ${chunk}`);
    process.stdin.pipe(socket);

  });

});

server.listen({host: HOST, port: PORT},() => {
  process.stdout.write('This is the server! ' + HOST +' '+ PORT +'\n');
});