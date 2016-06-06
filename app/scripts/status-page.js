myApp.onPageInit('status', function (page) {
  // document.getElementsByClassName('item-after').value
  console.log('status onPageInit', $$('#sel').text())
});

myApp.onPageBack('status', function (page) {
  // document.getElementsByClassName('item-after').value
  console.log('status onPageBack', $$('#sel').text())
  group.updateSelfStatus($$('#sel').text());
});
