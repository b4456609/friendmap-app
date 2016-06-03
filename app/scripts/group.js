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


Member.prototype.updateUserStatus = function(){
    //TODO: Implement Me

};


Member.prototype.updateUserLocation = function(){
    //TODO: Implement Me

};

var group = new Group();
