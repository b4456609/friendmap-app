/**
* Generated On: 2016-6-2
* Class: GPSMonitor
*/

function GPSMonitor() {
  //Constructor
  this.timestamp = null;
  this.lat = null;
  this.lon = null;
  this.gpsInterval = null;
}


/**
* @return {null}
*/

function successPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log('Latitude is ' + latitude + ' Longitude is ' + longitude);
  //this.lat=latitude;
  //this.lon=longitude;
  var nowTime = new Date().getTime();
  console.log('time:' + nowTime);
  //this.timestamp=nowTime;

  serverClient.updateLocation(longitude, latitude, nowTime);
  group.updateSelfLocation(longitude, latitude, nowTime);
  //var img = new Image();
  //img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  //output.appendChild(img);
};


function errorPosition() {
  console.log('Unable to retrieve your location');
};

GPSMonitor.prototype.getGPS = function () {
  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  }
  //console.log('you are right');
  navigator.geolocation.getCurrentPosition(successPosition, errorPosition);
}


GPSMonitor.prototype.startMonitor = function () {
  this.gpsInterval = window.setInterval(this.getGPS, 5000);
};

GPSMonitor.prototype.stopMonitor = function () {
  window.clearInterval(this.gpsInterval);
};


var gpsMonitor = new GPSMonitor();
