
 var user1 = new User();

function makeFakeDataToServer() {
  var user = new User();
  user.name = 'apple';
  user.login();

  user1.name = 'apple1';
  user1.login();
  var user2 = new User();
  user2.name = 'apple2';
  user2.login();
  var user3 = new User();
  user3.name = 'apple3';
  user3.login();
  var user4 = new User();
  user4.name = 'apple4';
  user4.login();
}

function test() {
  user.login();
  group.createGroup('name');
  serverClient.createGroup(group.name, group.id);
}
