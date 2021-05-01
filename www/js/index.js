const { Manager } = require('buildthing-ble-sdk')

var app = {
   initialize: function() {
     this.bleManager = null
     this.isBlePoweredOn = false
     this.bindEvents();
   },

   bindEvents: function() {
       document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
       document.getElementById("startScanBtn").addEventListener("click", this.startScan.bind(this))
       document.getElementById("stopScanBtn").addEventListener("click", this.stopScan.bind(this))
   },

   startScan: function() {
     if(this.isBlePoweredOn === true) this.bleManager.startScan()
     else alert('failed: bluetooth poweredOff')
   },

   stopScan: function() {
     this.bleManager.stopScan()
   },

   onDeviceReady: function() {

       this.bleManager = new Manager()

       this.bleManager.on('stateChange', function (state) {
         console.log(state)
         this.isBlePoweredOn = state === 'poweredOn' // 모바일 디바이스에 블루투스 상태 확인
       }.bind(this))

       // beacon discover
       this.bleManager.on('discover', function(beacon) {
         alert("Discover BuildThing beacon: " + beacon.name)
         console.log(beacon)
       })

   },
};

app.initialize()
window.app = app // 디버그 용
