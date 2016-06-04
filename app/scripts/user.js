function User(){
    this.name = '訪客';
    // this.id = "45616516";
    this.id = '' + new Date().getTime();
}

User.prototype.login = function(){
  serverClient.addUser(this.name, this.id);
}

var user = new User();
