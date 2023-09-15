import http from 'http';
import p from 'mjpeg-proxy'; 
import express from 'express';
import client from '../client/index.html.mjs';
const app = express();
const wsApp = express();
import rtsp from 'rtsp-relay';
const { proxy, scriptUrl } = rtsp(wsApp, null, 'tcp');
const ok = Object.keys;
const oa = Object.assign;
export default class WebServer{
  constructor(schema){
    this.handlers = ok(schema.regions).reduce((acc, rKey) => {
      return oa({}, acc, schema.regions[rKey].cameras.reduce((acc2, camera, idx)=>{
          console.log('foop', rKey, idx);
          if(!camera.type || camera.type === 'mjpeg'){
            return oa({}, acc2, {
              [`/${rKey}/${idx}`]: new p.MjpegProxy(camera.url).proxyRequest
            });
          }
          if(camera.type === 'rtsp'){
            console.log('rtsp url', camera.url)
            return oa({}, acc2, {
              [`/${rKey}/${idx}`]: {
                ...camera,
                proxy: proxy({
                  url: camera.url,
                  verbose: true,
                  transport: 'tcp'
                })
              }
            })
          }
          return acc;
        }, {}))
    }, {});
    ok(this.handlers).map(hKey=>{
      console.log('settin up hkey', hKey)
      const region = hKey.split('/')[1];
      const cam = hKey.split('/')[2];
      if(this.handlers[hKey]?.type === 'rtsp'){
        console.log('setting up handle for', region, cam, this.handlers[hKey])
        return wsApp.ws(`/ws/rtsp/stream/${region}/${cam}`, this.handlers[hKey].proxy)
      }
      app.get(`${hKey}.jpg`, new p.MjpegProxy(schema.regions[region].cameras[cam].url).proxyRequest);
    });
    this.client = client(schema, scriptUrl);
    app.get('/schema', (req, res)=>{
      res.json(schema);
    })
    app.get('index.html', (req, res)=>{
      res.send(this.client);
    })
    app.get('/', (req, res)=>{
      res.send(this.client);
    })
    app.get('/test', (req, res) => {
     res.send(`
<!DOCTYPE html>
       <html>
         <head>
           <title>Demo</title>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
             <meta name="description" content="Demo project">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <style type="text/css"></style>
         </head>
         <body>
         <canvas id='canvas'></canvas>

         <script src='${scriptUrl}'></script>
         <script>
           loadPlayer({
                   url: 'ws://' + location.host.split(":")[0] + ':9999/ws/rtsp/stream/massholes/1',
                   canvas: document.getElementById('canvas')
                 });
         </script>
         </body>
       </html>
       `)
    })
    app.listen(9090);
    wsApp.listen(9999);
  }
}
