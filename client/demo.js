import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
function RTSP (props){
   const [hasInited, setHasInited] = useState(false);
   const wsUrl = location.host.includes('localhost') ? 
      `ws://${location.host.split(':')[0]}:9999/ws/rtsp/stream/${props.rname}/${props.idx}` :
      `wss://${location.host}/ws/rtsp/stream/${props.rname}/${props.idx}`;
   useEffect(() => {
      if(!hasInited){
         loadPlayer({
           url: wsUrl,
           canvas: document.getElementById(`${props.rname}-${props.idx}`)
         });
         setHasInited(true)
      }
   });
   return <div className="flex-item">
      <canvas style={{display: "block"}} id={`${props.rname}-${props.idx}`} />
   </div>;

}
function Inject(props){
   return <div className="flex-item" dangerouslySetInnerHTML={{__html: props.camera.inject}}></div>
}
function Mjpeg (props){
   return <div className="flex-item">
      <img src={`/${props.region}/${props.idx}.jpg`} />
   </div>;
}
function Tab (props) {
   console.log(props.region);
   // return <pre>{JSON.stringify(props.region.cameras, null, 2)}</pre>
   return <div className="tab-body active">{props.region.cameras.map((camera, idx) => {
      // return <h1>{camera.type}</h1>
      switch (camera.type){
      case 'rtsp':
         return <RTSP rname={props.rname} idx={idx} />
      case 'inject':
         return <Inject camera={camera} />
      case 'mjpeg':
         return <Mjpeg region={props.rname} idx={idx} />;
      default:
         return <h1>dull</h1>
      }
   })}</div>
}
function TabHeader(props){
   return <a className={["tab-header", props.active && 'active'].join(' ')} onClick={()=>props.setCurrentIndex(props.idx)}>{props.rname}</a>
}
function App (){
   let [currentIndex, setCurrentIndex] = useState(0);
   let [fetchedSchema, setFetchedSchema] = useState(false);
   let [schema, setSchema] = useState({});
   useEffect(() => {
      if(!fetchedSchema){
        fetch("/schema").then(resp => {
         console.log(resp)
         return resp.json()
        }).then(schema=>{
         // console.log(schema)
           setSchema(schema)
           setFetchedSchema(true)
        }).catch(console.error)
      }
   })
   let regions = schema.regions;
   let regionNames = regions && Object.keys(regions);
   console.log('jabby', regions)
   return regions ?
      <div>
         <div className="container"><h1>{schema.title}</h1></div>
         <div className="tab-headers">{regionNames.map((rname, idx) => <TabHeader rname={rname} idx={idx} setCurrentIndex={setCurrentIndex} active={currentIndex == idx}/>)}</div>

         <Tab region={regions[regionNames[currentIndex]]} rname={regionNames[currentIndex]} />
      </div> :
      <h1>loading</h1>;
}
ReactDOM.render(<App />, document.getElementById('root'));
