/**
* Generated On: 2016-6-2
* Class: Map
*/

//Constructor
function Map() {
  this.map = null;
  this.label = null;
  this.geojson = [];
  this.myLayer = null;

}

// 初始畫地圖
Map.prototype.initmap = function () {
  this.map = L.mapbox.map('map', 'mapbox.streets', { center: [25.150911, 121.780102], zoom: 16 });
  this.myLayer = L.mapbox.featureLayer().addTo(this.map);
};

//更新所有成員在地圖上的位置

Map.prototype.drawAllMembers = function () {

  this.map.removeLayer(this.myLayer);
  this.myLayer = L.mapbox.featureLayer().addTo(this.map);
  this.geojson = [];

  for (var x = 0; x < group.members.length; x++) {
    this.geojson.push(group.members[x].marker);
  }

  this.myLayer.on('layeradd', function (e) {
    var marker = e.layer,
      feature = marker.feature;
    marker.setIcon(L.icon(feature.properties.icon));
    var content = '<h2>' + feature.properties.title + '<\/h2>' + '<p>' + feature.properties.description + '<\/p>' + '<img src="' + feature.properties.image + '" alt="" style="width:60px;height:60px;">';

    marker.bindPopup(content);
  });
  this.myLayer.setGeoJSON(this.geojson);
};


var map = new Map();

