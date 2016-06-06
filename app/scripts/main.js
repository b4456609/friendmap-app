// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  modalTitle: 'FriendMap',
  // If it is webapp, we can enable hash navigation:
  pushState: true,
  // Hide and show indicator during ajax requests
  onAjaxStart: function (xhr) {
    myApp.showIndicator();
  },
  onAjaxComplete: function (xhr) {
    myApp.hideIndicator();
  },
  onPageBeforeInit: function (app, page) {
    console.log('init onPageInit', user);
  },
  onPageInit: function (app, page) {
    //設定sidebar使用者的名稱
    document.getElementById('user-name').innerHTML = user.name;
  }
});

window.onload = function () {
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

function setSidebarName() {
  //設定sidebar使用者的名稱
  document.getElementById('user-name').innerHTML = user.name;
}


serverClient.init();

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

$$('.login-screen').on('opened', function () {
  console.log('open login');
  $$('#fb-login').on('click', function (e) {
    user.login();
  });
});

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// map token
L.mapbox.accessToken = 'pk.eyJ1IjoiYjQ0NTY2MDkiLCJhIjoiY2lveWVqZTRpMDF3dnVjbTh5N2V1aXBkeiJ9.0IYd1v5vsG3gqNb3wLYuIw';

// 如果使用者沒有建立群組或加入群組不能打開group頁面
function validGroupOrReturnToIndex() {
  if (!group.isValidGroup()) {
    if (mainView.activePage.name == 'group') {
      myApp.alert('請等待邀請或建立新的群組', function () {
        mainView.router.loadPage('index.html');
      });
    }
  }
}
