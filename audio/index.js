const fs = require('fs');
const audio = require('osx-audio');
const net = require('net');
const client = new net.Socket();
 
const input = new audio.Input();


client.connect(1337, 'stormpunk.dev.host', function() {
   console.log('Connected');
   input.pipe(client);
});

client.on('data', function(data) {
   console.log('Received: ' + data);
   //client.destroy(); // kill client after server's response
});

client.on('close', function() {
   console.log('Connection closed');
});
