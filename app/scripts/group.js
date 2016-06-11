function Group() {
  //Constructor
  this.id = null;
  this.members = [];
  this.name = null;
  this.memberCounter = 0;
}

Group.prototype.isValidGroup = function () {
  if (this.id === null) {
    return false;
  }
  else {
    return true;
  }
};

Group.prototype.createGroup = function (name) {
  this.id = new Date().getTime();
  this.name = name;
};

Group.prototype.addSelf = function () {
  this.members.push(new Member(user.id, user.name));
};


Group.prototype.setMember = function (users) {
  // console.log(users);
  for (var i in users) {
    var j = 0;
    for (; j < this.members.length; j++) {
      if (users[i].id === this.members[j].id)
        break;
    }
    // console.log(j);
    if (j === this.members.length) {
      this.members.push(users[i]);
      onAddPeopleSuccess(users[i].name);
    }
  }
  this.memberCounter = this.members.length;
}

Group.prototype.updateSelfStatus = function (status) {
  // console.log(users);
  for (var i in this.members) {
    if (this.members[i].id === user.id) {
      this.members[i].updateUserStatus(status);
      break;
    }
  }
}

Group.prototype.acceptGroup = function () {
  //TODO: Implement Me
}

//-----------------------------------------------------------------------------
Group.prototype.testResetPosition = function (memberID, lon, lat,timestamp) {
  for(var x = 0; x<this.members.length; x++){
    if(this.members[x].id == memberID){
      //this.members[x].setUserLocation(lon, lat, timestamp);
      break;
    }
  }
  this.members[memberID].setUserLocation(lon, lat, timestamp);
  map.drawAllMembers();
};

Group.prototype.testResetStatus = function (memberID, status,timestamp) {
  for (var x = 0; x < this.members.length; x++) {
    if (this.members[x].id == memberID) {
      //this.members[x].setUserStatus(status, timestamp);
      break;
    }
  }
  this.members[memberID].setUserStatus(status, timestamp);
  map.drawAllMembers();
};

function Member(id, name) {
  //Constructor
  this.groupMemberID = null;
  this.id = id;
  this.name = name;
  this.status = {
    status: null,
    timestamp: null
  };
  this.location = {
    lon: 0,
    lat: null,
    timestamp: null
  };

  this.marker = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [0, 0]
    },
    "properties": {
      "title": name,
      "description": "("+this.location.lon+","+ this.location.lat+")",
      "image": "http://graph.facebook.com/" + id + "/picture",
      "icon": {
           "iconUrl": "images/happy.png",
           "iconSize": [50, 75], // size of the icon
           "iconAnchor": [15, 25], // point of the icon which will correspond to marker's location
           "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
           "className": "dot"      
       }
    }

  }

}

Member.prototype.setUserLocation = function (longitude, latitude, time) {

  this.location.lon = longitude;
  this.location.lat = latitude;
  this.location.timestamp = time;
  this.marker.geometry.coordinates = [longitude, latitude];
  this.marker.properties.description = "( "+this.location.lon+" , "+ this.location.lat+" )";
}


Member.prototype.setUserStatus = function (status, time) {
  this.status.status = status;
  this.status.timestamp = time;
  this.marker.properties.icon.iconUrl = "images/" + status + ".png";

};

var group = new Group();
