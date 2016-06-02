/**
* Generated On: 2016-6-2
* Class: Map
*/

//Constructor
function Map() {
  this.map = null;
}

// 初始畫地圖
Map.prototype.initmap = function () {
  this.map = L.mapbox.map('map', 'mapbox.streets')
    .setView([40, -74.50], 9);
};



Map.prototype.updateUserLocation = function () {
  //TODO: Implement Me

};



Map.prototype.updateUserStatus = function () {
  //TODO: Implement Me

};



var map = new Map();
