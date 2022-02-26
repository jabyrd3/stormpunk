import net from 'net';
import WebSocket from 'ws';

const server = net.createServer(socket => {
  socket.on('data', d => wss.clients.forEach(client => {
    if (client !== socket && client.readyState === WebSocket.OPEN) {
      client.send(d);
    }
  }));
});

server.listen(1337, '0.0.0.0');
const sockets = [];
import ws from 'ws';
const wss = new ws.Server({port: 7331});

wss.on('connection', ws => {
  sockets.push(ws);
  console.log('new socket');
    ws.on('message', function (message) {
      console.log('received: %s', message)
    });
});