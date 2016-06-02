myApp.onPageInit('status', function (page) {
  var pickerDevice = myApp.picker({
    input: '#picker-device',
    cols: [
      {
        textAlign: 'center',
        values: ['開心', '緊急', '難過', 'GG']
      }
    ]
  });
});
