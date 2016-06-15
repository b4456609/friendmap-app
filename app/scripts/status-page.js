myApp.onPageInit('status', function (page) {
  var status = group.getSelfStatus();
  console.log(status);
  if (status !== undefined) {
    $$('select')[0].selectedIndex = valueToStatusIndex(status);
    $$('.item-after').html(valueToStatusName(status));
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

function valueToStatusName(val) {
  if (val === 'happy')
    return '開心';
  if (val === 'warning')
    return '緊急';
  if (val === 'gg')
    return 'GG';
}

function statusIndexToValue(val) {
  if (val === 0)
    return 'happy';
  if (val === 1)
    return 'warning';
  if (val === 2)
    return 'gg';
}

function updateStatus() {
  var status = statusIndexToValue($$('select')[0].selectedIndex);
  console.log(status);
  group.updateSelfStatus(status, new Date().getTime());
}
