
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

function memberTest(){
  var members = [];
  var timestamp = new Date().getTime();

  var member1 = new Member(timestamp+1+'', "rdrrmew");
  member1.setUserLocation(121.779872,25.150964,timestamp)
  member1.setUserStatus("happy",timestamp);
  members.push(member1);


  var member2 = new Member(timestamp+2+'', "afasd");
  member2.setUserLocation(121.779872,25.150964,timestamp)
  member2.setUserStatus("gg",timestamp);
  members.push(member2);


  var member3 = new Member(timestamp+3+'', "uglydog");
  member3.setUserLocation(121.779872,25.150964,timestamp)
  member3.setUserStatus("warning",timestamp);
  members.push(member3);


  // var member4 = new Member(timestamp+4+'', "kappa");
  // member4.setUserLocation(121.779872,25.150964,timestamp)
  // member4.setUserStatus("happy",timestamp);
  // members.push(member4);

  console.log(members);

  group.setMember(members);
}
