// import clientjs from './clientjs.mjs';
export default (schema, mpegJSUrl) => `
<!DOCTYPE html>
<html>

<head>
    <title>stormpunk</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="change your fucking passwords jesus christ">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
    body {
        padding: 0px;
        margin: 0px;
        background-color: black;
        color: white;
        font-family: Helvetica, Arial, sans-serif;
    }

    .container {
        text-align: center;
        margin-bottom: 10px;
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }

    .flex-item {
        flex: 0 0 33.3%;
        max-width: 50%;
    }
    .flex-item.fullwidth{
      flex: 0 0 100%;
      max-width: 100%;
    }
    .flex-item canvas {
      width: 100%;
    }
    .flex-item img {
        width: 100%;
    }

    .flex-item span {
        width: 100%;
        text-align: center;
        padding-top: 0px;
    }
    .flex-item iframe{
        width: 100%;
        height: 300px;
    }
    .container:not(.nomin) .flex-item:not(:first-child) {
        padding-left: 10px;
    }

    .container:not(.nomin) iframe {
        min-height: 320px;
        width: 100%;
    }
    .tab-headers{
      display: flex;
      width: 80vw;
      max-width: 900px;
      margin-left: 10vw;
      background-color: #666;
    }
    .tab-header{
      flex: 1 0 0;
      padding: 8px 0px;
      text-align: center;
      max-width: 20vw;
      cursor: pointer;
    }
    .tab-header.active{
      background-color: #555;
    }
    .tab-body{
      display: none;
    }
    .tab-body.active{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
    }
    iframe {
        border-width: 0px;
    }
    </style>
</head>

<body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src='${mpegJSUrl}'></script>
    <script type="text/babel" data-presets="react" data-type="module" src="/client/demo.js" />
</body>

</html>`;
