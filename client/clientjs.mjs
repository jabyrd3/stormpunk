export default schema => `
	// init
  window.currentIndex = 0
  const schema = ${JSON.stringify(schema, null, 2)}
  const bodies = Object.keys(schema.regions).map(r=> console.log('jabby', r) || \`
      <div class="tab-body active">
        \$\{schema.regions[r].cameras.map((c, idx) =>
          c.type && c.type==='inject' ?
          \`<div class="flex-item" style="height: 300px;">\$\{c.inject}</div>\` :
          c.type && c.type === 'rtsp' ?
          \` 
                <div class="flex-item \$\{c.modifier}">
                  <canvas style="display: block" id="\$\{r}-\$\{idx}" />
                </div>
            \` : \`
                <div class="flex-item \$\{c.modifier}">
                  <img src="/\$\{r}/\$\{idx}.jpg" />
                </div>
            \`).join(' ')}
      </div>\`)
  document.querySelector('.bodies').innerHTML = bodies[0];
  document.querySelector('.tab-header:first-of-type').classList.add('active');
  console.log('jab bodies', bodies)
	document.querySelector('.tab-body:nth-child(1)').classList.add('active');
  function PCMPlayer(t) { this.init(t) } PCMPlayer.prototype.init = function(t) { this.option = Object.assign({}, { encoding: "16bitInt", channels: 1, sampleRate: 8e3, flushingTime: 1e3 }, t), this.samples = new Float32Array, this.flush = this.flush.bind(this), this.interval = setInterval(this.flush, this.option.flushingTime), this.maxValue = this.getMaxValue(), this.typedArray = this.getTypedArray(), this.createContext() }, PCMPlayer.prototype.getMaxValue = function() { var t = { "8bitInt": 128, "16bitInt": 32768, "32bitInt": 2147483648, "32bitFloat": 1 }; return t[this.option.encoding] ? t[this.option.encoding] : t["16bitInt"] }, PCMPlayer.prototype.getTypedArray = function() { var t = { "8bitInt": Int8Array, "16bitInt": Int16Array, "32bitInt": Int32Array, "32bitFloat": Float32Array }; return t[this.option.encoding] ? t[this.option.encoding] : t["16bitInt"] }, PCMPlayer.prototype.createContext = function() { this.audioCtx = new(window.AudioContext || window.webkitAudioContext), this.gainNode = this.audioCtx.createGain(), this.gainNode.gain.value = 1, this.gainNode.connect(this.audioCtx.destination), this.startTime = this.audioCtx.currentTime }, PCMPlayer.prototype.isTypedArray = function(t) { return t.byteLength && t.buffer && t.buffer.constructor == ArrayBuffer }, PCMPlayer.prototype.feed = function(t) { if (this.isTypedArray(t)) { t = this.getFormatedValue(t); var e = new Float32Array(this.samples.length + t.length);
              e.set(this.samples, 0), e.set(t, this.samples.length), this.samples = e } }, PCMPlayer.prototype.getFormatedValue = function(t) { t = new this.typedArray(t.buffer); var e, i = new Float32Array(t.length); for (e = 0; e < t.length; e++) i[e] = t[e] / this.maxValue; return i }, PCMPlayer.prototype.volume = function(t) { this.gainNode.gain.value = t }, PCMPlayer.prototype.destroy = function() { this.interval && clearInterval(this.interval), this.samples = null, this.audioCtx.close(), this.audioCtx = null }, PCMPlayer.prototype.flush = function() { if (this.samples.length) { var t, e, i, n, a, s = this.audioCtx.createBufferSource(),
                  r = this.samples.length / this.option.channels,
                  o = this.audioCtx.createBuffer(this.option.channels, r, this.option.sampleRate); for (e = 0; e < this.option.channels; e++)
                  for (t = o.getChannelData(e), i = e, a = 50, n = 0; n < r; n++) t[n] = this.samples[i], n < 50 && (t[n] = t[n] * n / 50), r - 51 <= n && (t[n] = t[n] * a--/50),i+=this.option.channels;this.startTime<this.audioCtx.currentTime&&(this.startTime=this.audioCtx.currentTime),console.log("start vs current "+this.startTime+" vs "+this.audioCtx.currentTime+" duration: "+o.duration),s.buffer=o,s.connect(this.gainNode),s.start(this.startTime),this.startTime+=o.duration,this.samples=new Float32Array}};
  var ws = new WebSocket('wss://stormpunk.dev.host/socket');
  ws.binaryType = 'arraybuffer'
  let player;
  ws.onopen = function() {
      console.log('new socket')
      ws.send('hrm')
      player = new PCMPlayer({
          encoding: '16bitInt',
          channels: 2,
          sampleRate: 44105,
          flushingTime: 1000
      });
      player.volume(1);
  }
  ws.onmessage = function(ev) {
      player.feed(new Uint8Array(ev.data));
  };
  window.fireUpPlayers = () => {
    const targetRegionKey = Object.keys(schema.regions)[window.currentIndex]
    console.log('jabby', targetRegionKey)
    const targetCams = schema.regions[targetRegionKey].cameras
    targetCams.filter(tc=>tc.type==='rtsp').map((cam, idx) => {
      console.log('jabby', document.getElementById(\`\$\{targetRegionKey}-\$\{idx}\`))
      loadPlayer({
        url: 'wss://' + location.host + \`/ws/rtsp/stream/\$\{targetRegionKey}/\$\{idx}\`,
        canvas: document.getElementById(\`\$\{targetRegionKey}-\$\{idx}\`)
      });
    })
  }
  // handlers
  window.changetab = (e) => {
    console.log('clicked on', e);
    document.querySelector('.tab-body.active').classList.remove('active');
    const targetIndex = Object.keys(schema.regions).indexOf(e);
    window.currentIndex = targetIndex
    console.log('jabbo', targetIndex, bodies[targetIndex])
    document.querySelector('.bodies').innerHTML = bodies[targetIndex];
    document.querySelector('.tab-header.active').classList.remove('active');
    document.querySelector('.tab-headers .tab-header:nth-child(' + (targetIndex+1)+ ')').classList.add('active');
    fireUpPlayers()
  }

`;
