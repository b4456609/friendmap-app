function Group(){
    //Constructor
    this.groupID = null;
    this.members = [];
    this.memberCounter = 0;
}


//------------------------------------------------------------------------------
Group.prototype.createGroup = function () {

};
//---------------------------------------------------------------------------
Group.prototype.acceptGroup = function (groupID, members) {

};
//===========================================================================
Group.prototype.leavaGroup = function () {

};
//--------------------------------------------------------------------------
Group.prototype.setMember = function (id, name, status, lon, lat, time) {
    var member = new Member();
    member.groupMemberID = this.memberCounter++;
    member.id = id;
    member.name = name;
    member.setUserStatus(status, time);
    member.setUserLocation(lon, lat, time);
    this.members.push(member);
    map.drawAllMember();
};
//-------------------------------------------------------------------------
Group.prototype.updateUserLocation = function (memberID,lon,lat) {
    for(var x=0;x<this.members.length;x++){
        if(this.members[x].id==memberID){
            this.members[x].setUserLocation(lon,lat,1);
             map.updateUserLocation(x);
            break;
        }
    }
};

//----------------------------------------------------------------------------
Group.prototype.updateUserStatus = function (memberID,status) {
    for(var x=0;x<this.members.length;x++){
        if(this.members[x].id==memberID){
            this.members[x].setUserStatus(status,1);
            map.updateUserStatus(x);
            break;
        }
    }
};



function Member(){
    //Constructor
    this.groupMemberID = null;
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
};


Member.prototype.setUserLocation = function(longitude,latitude,time){
   this.location.lon = longitude;
   this.location.lat = latitude;
   this.location.timestamp = time;
};

var group = new Group();
