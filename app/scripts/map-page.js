myApp.onPageInit('map', function (page) {
  map.initmap();
  map.drawAllMembers();
});

function updateMapInMapPage() {
  if (mainView.activePage.name == 'map') {
    map.drawAllMembers();
  }
}
