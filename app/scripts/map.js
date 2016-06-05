/**
* Generated On: 2016-6-2
* Class: Map
*/

//Constructor
function Map() {
  this.map = null;
  this.label = null;
}

// 初始畫地圖
Map.prototype.initmap = function () {

  this.map = L.mapbox.map('map', 'mapbox.streets', { center: [25.150911, 121.780102], zoom: 16 });
  this.label = L.marker([25.150911, 121.780102]).addTo(this.map);
};



Map.prototype.updateUserLocation = function () {
   
};

Map.prototype.updateUserStatus = function () {
  //TODO: Implement Me
};

var map = new Map();

