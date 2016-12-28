/*jshint esversion: 6 */
const net = require('net');
const HOST = 'localhost';
const PORT = 6969;

let client = net.connect({host: HOST, port: PORT});

client.on('connect', (chunk)=>{
  console.log('connected');
  process.stdin.pipe(client);
});

client.on('data', (chunk)=>{
  console.log(`server: ${chunk}`);
});