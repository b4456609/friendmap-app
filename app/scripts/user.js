function User() {
  this.name = '訪客' + new Date().getTime();
  this.id = '' + new Date().getTime();
  this.accessToken = null;
}

User.prototype.setUserFromFB = function () {
  var self = this;
  FB.api('/me', function (response) {
    self.name = response.name;
    self.id = response.id;
    localStorage.setItem('id', self.id);
    localStorage.setItem('name', self.name);
    setSidebarName();
    serverClient.addUser(self.name, self.id);
    myApp.closeModal();
  });
}

User.prototype.checkFBStatus = function () {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

User.prototype.login = function () {
  this.checkFBStatus();
}

User.prototype.checkLogin = function () {
  if (localStorage.getItem("id") === null) {
    console.log('user not login');
    myApp.loginScreen();
  }
  else {
    user.id = localStorage.getItem("id");
    user.name = localStorage.getItem("name");
    setSidebarName();
    serverClient.addUser(user.name, user.id);
  }
}

var user = new User();


// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    user.accessToken = response.authResponse.accessToken;
    user.setUserFromFB();
  } else {
    FB.login(function (response) {
      user.setUserFromFB()
    });
  }
}




