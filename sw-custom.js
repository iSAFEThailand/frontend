// const cacheName='';
//const cacheAssets=[];
var nIntervId;
self.addEventListener('message', (event) => {
  console.log('[WORKER] worker con data: message ', event)
 })

 self.addEventListener('activate', (event) => {
  console.log('[WORKER] worker con data: Activate ', event)
  // Mylocation();

  // nIntervId = setInterval(Mylocation, 10000);


 })
 let refreshing = false;
 self.addEventListener('controllerchange', () => {

  if (!refreshing) {
      window.location.reload()
      refreshing = true
  }
})

function saveData(id, device, lat, lng) {
  var date = new Date();
  var d = date.toISOString();
  let formData = new FormData();
  formData.append('mem_id', JSON.stringify(id));
  formData.append('device', JSON.stringify(device));
  formData.append('lat', JSON.stringify(lat));
  formData.append('lng', JSON.stringify(lng));

  const url = "https://www.isafetravel.com/api/v2/OTAAutoLocation"; // site that doesn’t send Access-Control-*
  fetch(url, {
      method: "post",
      //make sure to serialize your JSON body
      body: formData
    })
    .then(response => response.text())
    .then(function (contents) {
      console.log(contents);
      console.log(id, d, lat, lng)
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}
function getDevice() {
  const device = navigator.userAgent

  return device.substring(0, device.lastIndexOf(')') + 1)
}
function Mylocation() {
  if (navigator.geolocation) {
    let target = {
      latitude : 0,
      longitude: 0
    };
    
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    this.id = navigator.geolocation.watchPosition(this.success, this.error, options);
    
  } else {
    alert('Sorry, browser does not support geolocation!')
  }
}
function success(pos) {
  const vm = this
  var crd = pos.coords;
  console.log(crd)
  
  
  let position = {
    lat: crd.latitude,
    lng: crd.longitude
  }
  const device = vm.getDevice();
  self.saveData("FCM",device,position.lat,position.llng);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
  window.location.reload();
}
