const { Manager } = require('buildthing-ble-sdk')

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  const bleManager = new Manager()
  bleManager.on('stateChange', function (state) {
    alert('dfdf')
    bleManager.startScan()
    bleManager.setForegroundScanPeriod(2000)
    bleManager.setForegroundBetweenScanPeriod(2000)
  })

  bleManager.on('discover', function(beacon) {
    
  })
}

