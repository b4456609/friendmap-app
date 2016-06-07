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
  //-------------------------------測試Leaflet Marker--------------------------------------------------
 /* this.label = L.marker([25.150911, 121.780102], {
    icon: L.mapbox.marker.icon({
      'marker-size': 'large',
      'marker-color': '#9BC1BC',
      'marker-symbol': 'bar'
    })
  }).addTo(this.map);*/
  //---------------------------------------測試GeoJson Marker---------------------------------------
  
  this.myLayer = L.mapbox.featureLayer().addTo(this.map);
};

//更新所有成員在地圖上的位置
Map.prototype.updateUserLocation = function (memberID) {
  this.geojson[memberID].geometry.coordinates = [group.members[memberID].location.lon, group.members[memberID].location.lat];
  this.myLayer.setGeoJSON(this.geojson);
};

Map.prototype.updateUserStatus = function (memberID) {
  this.geojson[memberID].properties.icon.iconUrl = "images/" + group.members[memberID].status.status + ".png";
  this.myLayer.setGeoJSON(this.geojson);
};

Map.prototype.drawAllMember = function () {
  this.map.removeLayer(this.myLayer);
  this.myLayer = L.mapbox.featureLayer().addTo(this.map);
  this.geojson = [];
  for (var x = 0; x < group.members.length; x++) {
    var marker = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [group.members[x].location.lon, group.members[x].location.lat]
      },
      "properties": {
        "icon": {
          "iconUrl": "images/" + group.members[x].status.status + ".png",
          "iconSize": [50, 50], // size of the icon
          "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
          "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
          "className": "dot"
        },
        "description": group.members[x].name + ""
      }
    }
    this.geojson.push(marker);
  }

  this.myLayer.on('layeradd', function (e) {
    var marker = e.layer,
      feature = marker.feature;
    marker.setIcon(L.icon(feature.properties.icon));
  });
  this.myLayer.setGeoJSON(this.geojson);
};

var map = new Map();

