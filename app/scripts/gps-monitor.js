/**
* Generated On: 2016-6-2
* Class: GPSMonitor
*/

function GPSMonitor(){
    //Constructor
    this.timestamp = null;
    this.lat = null;
    this.lon = null;

}


/**
* @return {null}
*/

function successPosition(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
	console.log('Latitude is '+latitude +' Longitude is '+longitude );
	//this.lat=latitude;
	//this.lon=longitude;
	var nowTime = new Date();
	console.log('time:'+nowTime);
	//this.timestamp=nowTime;
	
	serverClient.updateLocation(longitude,latitude,nowTime);
	group.updateUserLocation(longitude,latitude,nowTime);
    //var img = new Image();
    //img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
    //output.appendChild(img);
    };
function errorPosition() {
    console.log('Unable to retrieve your location');
	};
	
GPSMonitor.prototype.startMonitor = function(){
    if (!navigator.geolocation){
	console.log('Geolocation is not supported by your browser');
	}
	//console.log('you are right');
	
	
	navigator.geolocation.getCurrentPosition(successPosition,errorPosition);
};



var gpsMonitor = new GPSMonitor();
