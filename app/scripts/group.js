function Group() {
  //Constructor
  this.id = null;
  this.members = [];
  this.name = null;

}

Group.prototype.isValidGroup = function () {
  if(this.id === null){
    return false;
  }
  else{
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
      if (users[i].id == this.members[j].id)
        break;
    }
    // console.log(j);
    if (j == this.members.length) {
      this.members.push(new Member(users[i].id, users[i].name));
      onAddPeopleSuccess(users[i].name);
    }
  }
}

Group.prototype.acceptGroup = function () {
  //TODO: Implement Me

};

function Member(id, name) {
  //Constructor

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


Member.prototype.updateUserStatus = function () {
  //TODO: Implement Me

};


Member.prototype.updateUserLocation = function () {
  //TODO: Implement Me

};

var group = new Group();
