export default {
  title: "hurricane lee",
  regions: {
    "massholes": {
      cameras: [
      {
        "url": "rtsp://69.124.9.156/avn=2",
        "type": "rtsp"
      }, 
      {
        "url": "http://98.229.18.194:5000/mjpg/video.mjpg",
        "type": "mjpeg"
      },
      {
        "inject": "<iframe src=\"https://video.nest.com/embedded/live/FcEnfF396B?autoplay=1\"></iframe>",
        "type": "inject"
      }
      ]
    },
    "new brunswick": {
      cameras: 
      [
        {
          "inject": "<iframe src=\"https://g1.ipcamlive.com/player/player.php?alias=loyalistplaza&skin=white&autoplay=1&mute=1&disableuserpause=1\"></iframe>",
          type: 'inject'
        }, {
          "inject": "<iframe src=\"https://g1.ipcamlive.com/player/player.php?alias=partridgeisland&skin=white&autoplay=1&mute=1&disableuserpause=1\"></iframe>",
          type: 'inject'

        }]
      // https://g1.ipcamlive.com/player/player.php?alias=partridgeisland&skin=white&autoplay=1&mute=1&disableuserpause=1
        // [{
        //   url:'rtsp://190.46.220.228:554/11',
        //   type: 'rtsp'
        // }, {
        //   url: 'rtsp://91.145.241.165:554/11',
        //   type: 'rtsp'
        // }, {
        //   url: 'rtsp://91.145.216.194:554/1/1:1/main',
        //   type: 'rtsp'
        // }, {
        //   url: 'rtsp://91.145.194.60:554/1',
        //   type: 'rtsp'
        // }, 
        // {
        //   url: 'rtsp://46.30.166.89/11',
        //   type: 'rtsp'
        // },
        //   {
        //     url: 'rtsp://91.207.66.94/live/ch00_0',
        //     type: 'rtsp'

        //   }
        //   ]
    } 
  }}
//  regions: {
////    brooklyn: {
 ////     cameras: [
  ////      {
   ////       url: 'http://admin:12345@24.90.118.31:8082/nphMotionJpeg?Resolution=640x480&Quality=Standard',
    ////      type: 'mjpeg'
     ////   },
      ////  {
       ////   url: 'http://208.105.94.186:84/mjpg/video.mjpg',
        ////  type: 'mjpeg'
        ////},
       //// {
        ////  url: 'http://admin:12345@24.90.118.31:8081/nphMotionJpeg?Resolution=640x480&Quality=Standard',
         //// type: 'mjpeg'
       //// }
     //// ]
    //},
   // 'manhattan-maybe': {
   ////   cameras: [
    ////    {
     ////     url:'http://72.43.190.171:81/mjpg/video.mjpg',
      ////    type: 'mjpeg'
       //// },
       //// {
        ////  url: 'http://166.159.46.170:82/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
         //// type: 'mjpeg'
        ////},
       //// {
        ////  url: 'http://166.164.165.54/-wvhttp-01-/GetOneShot?image_size=1024x768&frame_count=1000000000',
         //// type: 'mjpeg'
        ////},
       //// {
        //  url: 'http://209.51.184.167/mjpg/video.mjpg',
     //     type: 'mjpeg'
     ////   },
      ////  {
       ////   url: 'http://184.74.129.122:12000/video.mjpg',
        ////  type: 'mjpeg',
         //// note: 'rare, idormobile'
        ////},
       //// {
        ////  url: 'http://184.75.37.146:12000/video.mjpg',
         //// type: 'mjpeg'
       //// }
      ////] 
    ////},
  ////  
   //// // charleston: {
    ////   cameras: [
    //   {
    //     url: 'http://64.203.239.235/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000',
    //     type: 'mjpeg'
    //   },
    //     // {
    //     //   url: 'http://50.247.38.14/cgi-bin/viewer/video.jpg?r=1567457921',
    //     //   type: 'polling'
    //     // },
    //     {
    //       url: 'http://75.109.245.42:8001/mjpg/video.mjpg',
    //       type: 'mjpeg'
    //     },
    //     {
    //       url: 'http://73.131.168.244:90/GetData.cgi?CH=1',
    //       type: 'mjpeg'
    //     },
    //     {
    //       url: 'http://70.89.148.162:8081/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
    //       type: 'mjpeg',
    //       modifier: 'fullwidth'
    //     },
    //     {
    //       url: 'http://70.89.148.162:8083/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
    //       type: 'mjpeg',
    //       modifier: 'fullwidth'
    //     }
    //   ]
    // },
    // myrtle: {
    //   cameras: [
    //     {
    //       inject : `<iframe class="flex-item fullwidth" id="iframe" scrolling="no" marginwidth="0" allowfullscreen="allowfullscreen" marginheight="0" height="400" style="height: 400px; visibility: visible;" src="https://public.earthcam.net/tJ90CoLmq7TzrY396Yd88MA1GlLKdDiNnUcmeUB6ntI!.tJ90CoLmq7TzrY396Yd88NjxJqhphxglDuObJt0ngB0!.tJ90CoLmq7TzrY396Yd88MI9-Xq2YDB5nqYBK6ADqGY!.tJ90CoLmq7TzrY396Yd88EYnTMIytP0WxkQTU3f-t3g!.tJ90CoLmq7TzrY396Yd88I6_oomwQjiBhkTR7HyxAMQ!" frameborder="0"></iframe>`,
    //       type: 'inject',
    //       modifier: 'fullwidth'
    //     }
    //   ]
    // },
    // jacksonville: {
    //   cameras: [
    //     {
    //       url: 'http://98.231.115.127/videostream.cgi?user=admin&pwd='
    //     }
    //   ]
    // },
    // savannahish: {
    //   cameras: [
    //     {
    //       url: 'http://173.12.209.42/mjpg/video.mjpg',
    //       type: 'mjpeg',
    //     },
    //     {
    //       url: 'http://64.192.53.130:8090/mjpg/video.mjpg',
    //       type: 'mjpeg'
    //     },
    //     {
    //       url: 'http://50.252.166.124/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
    //       type: 'mjpeg'
    //     },
    //     {
    //       url:'http://73.21.16.103:8083/mjpg/video.mjpg',
    //       type: 'mjpeg'
    //     },
    //     {
    //       url: 'http://50.252.186.192/mjpg/video.mjpg',
    //       type: 'mjpeg'
    //     }
    //   ]
    // }
  //}
//}
// todo: 
// datyona beach
// jacksonville
// brunswick
// savanah
// charleston
// wilmington
// virginia beach




