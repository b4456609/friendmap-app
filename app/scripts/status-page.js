myApp.onPageInit('status', function (page) {
  // document.getElementsByClassName('item-after').value
  console.log('status onPageInit', $$('#sel').text())
});

myApp.onPageBeforeRemove('status', function (page) {
  // document.getElementsByClassName('item-after').value
  console.log('status onPageBack', $$('#sel').text())
  group.updateSelfStatus(statusToValue($$('#sel').text()));
});

function statusToValue(val){
  if(val === '開心')
    return 'happy';
  if(val === '緊急')
    return 'warning';
  if(val === 'GG')
    return 'gg';
}
