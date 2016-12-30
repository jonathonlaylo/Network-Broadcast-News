/*jshint esversion: 6 */
const net = require('net');
const HOST = 'localhost';
const PORT = 6969;

let client = net.connect({host: HOST, port: PORT});

client.on('connect', ()=>{
  console.log('connected to server! ' + HOST +' '+ PORT);
  process.stdin.pipe(client);
});

client.on('data', (data)=>{
  // console.log(data.toString());
  console.log(`server: ${data}`);
});

process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
    if(chunk !== null){
      client.write(chunk);
    }
});
