function User(){
    this.name = '訪客';
    // this.id = "45616516";
    this.id = '' + new Date().getTime();
}

User.prototype.login = function(){
  serverClient.addUser(this.name, this.id);
}

var user = new User();


function makeFakeDataToServer() {
  var user = new User();
  user.name = 'apple';
  user.login();
  var user1 = new User();
  user1.name = 'apple1';
  user1.login();
  var user2 = new User();
  user2.name = 'apple2';
  user2.login();
  var user3 = new User();
  user3.name = 'apple3';
  user3.login();
  var user4 = new User();
  user4.name = 'apple4';
  user4.login();
}
