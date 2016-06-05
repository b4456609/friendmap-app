function Group(){
    //Constructor
    this.groupId = null;
    this.members = [];
    this.members[0].setUserStatus(1,1);
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


Member.prototype.setUserStatus = function(statusID,time){
   this.status.status = statusID;
   this.status.timestamp = time;
   map.updateUserStatus();
};


Member.prototype.setUserLocation = function(longitude,latitude,time){
   this.location.lon = longitude;
   this.location.lat = latitude;
   this.location.timestamp = time;
   map.updateUserLocation();
};

var group = new Group();
