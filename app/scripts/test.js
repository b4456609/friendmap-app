function makeFakeDataToServer() {
  serverClient.addUser('apple', new Date().getTime() + '');
  serverClient.addUser('banana', new Date().getTime() + 1 + '');
  serverClient.addUser('test', new Date().getTime() + 1 + '');
  serverClient.addUser('name', new Date().getTime() + 1 + '');
  serverClient.addUser('ㄏㄏ', new Date().getTime() + 1 + '');
}

function test() {
  user.login();
  group.createGroup('name');
  serverClient.createGroup(group.name, group.id);
}

function memberTest() {
  var members = [];
  var timestamp = new Date().getTime();

  var member1 = new Member(timestamp + 1 + '', "rdrrmew");
  member1.setUserLocation(121.779872, 25.150964, timestamp)
  member1.setUserStatus("happy", timestamp);
  members.push(member1);


  var member2 = new Member(timestamp + 2 + '', "afasd");
  member2.setUserLocation(121.779872, 25.150964, timestamp)
  member2.setUserStatus("gg", timestamp);
  members.push(member2);


  var member3 = new Member(timestamp + 3 + '', "uglydog");
  member3.setUserLocation(121.779872, 25.150964, timestamp)
  member3.setUserStatus("warning", timestamp);
  members.push(member3);


  console.log(members);

  group.setMember(members);

}
