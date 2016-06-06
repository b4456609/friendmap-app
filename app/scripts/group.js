function Group(){
    //Constructor
    this.groupId = null;
    this.members = [];
    
    this.memberCounter = 0;
    
    var member1 = new Member();
    this.setMember(1,"rdrrmew","happy",121.779872,25.150964,1);
    this.setMember(1,"afasd","gg",121.782002,25.150212,1);
    this.setMember(1,"uglydog","warning",121.779369,25.150169,1);
    this.setMember(1,"kappa","happy",121.777202,25.150674,1);
}

Group.prototype.setMember = function(id,name,status,lon,lat,time){
    var member = new Member();
    member.groupMemberID = this.memberCounter++;
    member.id = id;
    member.name=name;
    member.setUserStatus(status,time);
    member.setUserLocation(lon,lat,time);
    this.members.push(member);
};

Group.prototype.createGroup = function () {
    
};

Group.prototype.acceptGroup = function () {

};

Group.prototype.testResetPosition = function (memberID,lon,lat) {
    this.members[memberID].setUserLocation(lon,lat,1);
    map.updateUserLocation(memberID);
};

Group.prototype.testResetStatus = function (memberID,status) {
    if(status==1){
        this.members[memberID].setUserStatus("happy",1);
    }else if(status==2){
        this.members[memberID].setUserStatus("warning",1);
    }else if(status==3){
        this.members[memberID].setUserStatus("gg",1);
    }
    map.updateUserStatus(memberID);
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
