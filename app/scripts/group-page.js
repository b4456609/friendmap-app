myApp.onPageInit('group', function (page) {
  // Fruits data demo array
  var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');

  var autocompleteDropdownExpand = myApp.autocomplete({
    input: '#autocomplete-dropdown-expand',
    openIn: 'dropdown',
    expandInput: true, // expand input
    source: function (autocomplete, query, render) {
      console.log('query autocomplete');
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Find matched items
      for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    onChange: function (autocomplete, value) {
      console.log('autocomplete select', value);
    }
  });
});
