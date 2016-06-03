myApp.onPageInit('create-group', function (page) {

});

function onGroupSuccess() {
  myApp.addNotification({
    hold: 2000,
    title: '建立成功',
    message: '現在可以加入新的成員了',
    onClose: function () {
      mainView.router.loadPage('group.html');
    }
  });
}

function onGroupfail() {
  myApp.addNotification({
    hold: 2000,
    title: '建立失敗',
    message: '請檢查連線狀態，稍候在重試'
  });
}
