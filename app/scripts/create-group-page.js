myApp.onPageInit('create-group', function (page) {

  $$(document).on('click', '#submit', function (e) {
    var name = $$('#group-name').val();
    console.log('送出', name);
    if(name === ''){
      myApp.alert('請輸入群組名稱', '錯誤');
    }
    else{
      group.createGroup(name);
      serverClient.createGroup(group.name, group.id);
    }
  });
});

function onGroupSuccess() {
  myApp.addNotification({
    hold: 2000,
    title: '建立成功',
    message: '現在可以加入新的成員了'
  });
  mainView.router.loadPage('group.html');
}

function onGroupfail() {
  myApp.addNotification({
    hold: 2000,
    title: '建立失敗',
    message: '請檢查連線狀態，稍候在重試'
  });
}
