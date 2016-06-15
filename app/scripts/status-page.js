myApp.onPageInit('status', function (page) {
  console.log(group.getSelfStatus());
  if (group.getSelfStatus() !== undefined) {
    $$('select')[0].selectedIndex = valueToStatusIndex(group.getSelfStatus());
    $$('.item-after').html(group.getSelfStatus());
  }
});

function valueToStatusIndex(val) {
  if (val === 'happy')
    return 0;
  if (val === 'warning')
    return 1;
  if (val === 'gg')
    return 2;
}

function statusIndexToValue(val) {
  if (val === 0)
    return '開心';
  if (val === 1)
    return '緊急';
  if (val === 2)
    return 'GG';
}

function updateStatus() {
  var status = statusIndexToValue($$('select')[0].selectedIndex);
  console.log(status);
  group.updateSelfStatus(status, new Date().getTime());
}
