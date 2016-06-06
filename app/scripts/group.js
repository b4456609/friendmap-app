function Group(){
    //Constructor
    this.groupId = null;
    this.members = [];
    var member1 = new Member();
    this.setMember(1,"rdrrmew","happy",121.779872,25.150964,1);
    this.setMember(1,"afasd","happy",121.782002,25.150212,1);
    this.setMember(1,"uglydog","happy",121.779369,25.150169,1);
    this.setMember(1,"kappa","happy",121.777202,25.150674,1);
}

Group.prototype.setMember = function(id,name,status,lon,lat,time){
    var member = new Member();
    member.id = id;
    member.name=name;
    member.setUserStatus(status,time);
    member.setUserLocation(lon,lat,time);
    this.members.push(member);
};

Group.prototype.createGroup = function () {
    //TODO: Implement Me

};

Group.prototype.acceptGroup = function () {

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
   //map.updateUserStatus();
};


Member.prototype.setUserLocation = function(longitude,latitude,time){
   this.location.lon = longitude;
   this.location.lat = latitude;
   this.location.timestamp = time;
   //map.updateUserLocation();
};

var group = new Group();
