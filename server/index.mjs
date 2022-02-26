import p from 'mjpeg-proxy'; 
import './audioSocket.mjs';
import schema from './schema.mjs'
import server from './server.mjs';
const serve = new server(schema);

process.on('SIGINT', () => {
  serve.deleteMe();
});
process.on('SIGTERM', () => {
  serve.deleteMe();
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown WHO CAREs');
    // process.exit(1);
  });
