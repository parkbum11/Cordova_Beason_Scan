const { Manager } = require('buildthing-ble-sdk')

var app = {
   initialize: function() {
     this.bleManager = null
     this.bindEvents();
   },

   bindEvents: function() {
       document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
   },

   onDeviceReady: function() {
       alert('dfdf')
       this.receivedEvent('deviceready');
       this.bleManager = new Manager()
       this.bleManager.on('stateChange', function (state) {
        console.log(state)
        if(state === 'poweredOn') this.bleManager.startScan()
       }.bind(this))
   },
};

// window.app = app