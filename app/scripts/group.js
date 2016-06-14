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

Group.prototype.updateSelfStatus = function (status, nowTime) {
  // console.log(users);
  for (var i in this.members) {
    if (this.members[i].id === user.id) {
      this.members[i].setUserStatus(status, nowTime);
      break;
    }
  }

};

Group.prototype.acceptGroup = function () {
  //TODO: Implement Me
}

Group.prototype.testResetPosition = function (memberID, lon, lat) {
  this.members[memberID].setUserLocation(lon, lat, 1);
  map.updateUserLocation(memberID);
};

Group.prototype.testResetStatus = function (memberID, status) {
  if (status == 1) {
    this.members[memberID].setUserStatus("happy", 1);
  } else if (status == 2) {
    this.members[memberID].setUserStatus("warning", 1);
  } else if (status == 3) {
    this.members[memberID].setUserStatus("gg", 1);
  }
  map.updateUserStatus(memberID);
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
    lon: null,
    lat: null,
    timestamp: null
  };
}

Member.prototype.setUserLocation = function (longitude, latitude, time) {
  this.location.lon = longitude;
  this.location.lat = latitude;
  this.location.timestamp = time;
}

Member.prototype.setUserStatus = function (statusID, time) {
  this.status.status = statusID;
  this.status.timestamp = time;
};

var group = new Group();
