myApp.onPageInit('group', function (page) {
  validGroupOrReturnToIndex('group');
  // Fruits data demo array
  var autocompleteDropdownExpand = myApp.autocomplete({
    input: '#autocomplete-dropdown-expand',
    openIn: 'dropdown',
    preloader: true, //enable preloader
    expandInput: true, // expand input
    source: function (autocomplete, query, render) {
      serverClient.searchPeople();

      var results = [];
      if (query.length === 0) {
        render(searchResult.map(function (item) {
          return item.name
        }));
        return;
      }
      // Hide Preoloader
      autocomplete.hidePreloader();

      setTimeout(function () {
        // Find matched items
        for (var i = 0; i < searchResult.length; i++) {
          if (searchResult[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(searchResult[i].name);
        }
        // Render items by passing array with result items
        render(results);
      }, 300);

    },
    onChange: function (autocomplete, value) {
      console.log('autocomplete select', value);
      for (var i = 0; i < searchResult.length; i++) {
        if (value === searchResult[i].name) {
          serverClient.addUser2Group(searchResult[i].id, group.id);
          return;
        }
      }
    }
  });
  updateMemberList();
  $$('#leave-group').on('click', leaveGroup);
  $$('#group-page-name').html(group.name);
});

var searchResult = [];

function onAddPeopleSuccess(name) {
  if (name !== user.name) {
    myApp.addNotification({
      hold: 2000,
      title: '加入成功',
      message: name + ' 成為新的成員'
    });
  }
  updateMemberList();
}

function updateMemberList() {
  if (mainView.activePage.name == 'group') {
    var result = '';
    for (var i in group.members) {
      var template = '<li class="item-content"><div class="item-inner"><div class="item-title">' + group.members[i].name + '</div></div></li>';
      result += template;
    }
    $$('#members').html(result);
  }
}

function onAddPeopleFail() {
  myApp.addNotification({
    hold: 2000,
    title: '加入失敗',
    message: '請稍重試'
  });
}

function leaveGroup() {
  myApp.confirm('確定要離開群組嗎?', function () {
    serverClient.leaveGroup(user.id, group.id);
    gpsMonitor.stopMonitor();
    acc.stopMonitor();
    group = new Group();
    mainView.router.loadPage('index.html');
  });
}

function onMemberLeave(name) {
  if (name !== user.name) {
    myApp.addNotification({
      hold: 2000,
      title: '離開群組',
      message: name + ' 離開群組'
    });
  }
  updateMemberList();
}
