function Group(){
    //Constructor

    this.groupId = null;
    this.members = [];

}

Group.prototype.setMember = function(){
    //TODO: Implement Me

};

Group.prototype.createGroup = function(){
    //TODO: Implement Me

};

Group.prototype.acceptGroup = function(){
    //TODO: Implement Me

};
Group.prototype.updateSelfStatus = function (status,nowTime) {
  // console.log(users);
  for (var i in this.members) {
    if (this.members[i].id === user.id) {
      this.members[i].updateUserStatus(status,nowTime);
      break;
    }
  }
}
function Member(){
    //Constructor

    this.id = null;
    this.name = null;
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


Member.prototype.updateUserStatus = function(statusID,time){
    this.status.status = statusID;
	this.status.timestamp = time;
	
};


Member.prototype.updateUserLocation = function(lon,lat,nowTime){
    for (var i in this.members) {
    if (this.members[i].id === user.id) {
      this.members[i].setUserLocation(lon,lat,nowTime);
      break;
    }
  }

};
Member.prototype.setUserLocation = function (longitude, latitude, time) {
  this.location.lon = longitude;
  this.location.lat = latitude;
  this.location.timestamp = time;
}
var group = new Group();
