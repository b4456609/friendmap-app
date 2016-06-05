/**
* Generated On: 2016-6-2
* Class: Map
*/

//Constructor
function Map() {
  this.map = null;
  this.label = null;
  this.geojson = null;
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
  
    this.geojson = [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [121.780060,25.150056]
      },
      "properties": {
        "icon": {
          "iconUrl": "https://www.mapbox.com/mapbox.js/assets/images/astronaut1.png",
          "iconSize": [50, 50], // size of the icon
          "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
          "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
          "className": "dot"
        }
      }
    }
  ];
  this.myLayer.on('layeradd', function (e) {
    var marker = e.layer,
      feature = marker.feature;
    marker.setIcon(L.icon(feature.properties.icon));
  });
  this.myLayer.setGeoJSON(this.geojson);
  

  
};



Map.prototype.updateUserLocation = function () {
    latitude-=0.001;
  this.map.removeLayer(this.myLayer);
  this.myLayer = L.mapbox.featureLayer().addTo(this.map);
  this.geojson = [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [longitude,latitude]
      },
      "properties": {
        "icon": {
          "iconUrl": "https://www.mapbox.com/mapbox.js/assets/images/astronaut1.png",
          "iconSize": [50, 50], // size of the icon
          "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
          "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
          "className": "dot"
        }
      }
    }
  ];
  this.myLayer.on('layeradd', function (e) {
    var marker = e.layer,
      feature = marker.feature;
    marker.setIcon(L.icon(feature.properties.icon));
  });
  this.myLayer.setGeoJSON(this.geojson);

};

Map.prototype.updateUserStatus = function () {
    
};

var longitude = 121.780060;
var latitude = 25.150056;
var map = new Map();

