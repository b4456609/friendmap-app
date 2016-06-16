function ServerClient() {
  //Constructor
  this.wobsocket = null;
  this.url = 'wss://44770ff6.ngrok.io/friendmap-server/test';
  // this.url = 'wss://localhost:8443/friendmap-server/test';
  // this.url = 'wss://140.121.101.163:9443/friendmap-server/test';
}

ServerClient.prototype.init = function (params) {
  if (this.wobsocket === null) {
    this.websocket = new WebSocket(this.url);
    this.websocket.onopen = function (evt) { onOpen(evt) };
    this.websocket.onclose = function (evt) { onClose(evt); };
    this.websocket.onmessage = function (evt) { onMessage(evt) };
    this.websocket.onerror = function (evt) { onError(evt) };
  }
}

ServerClient.prototype.doSend = function (message) {
  var str = JSON.stringify(message);
  console.log('SENT: ', message);
  //開發功能是測試用
  this.websocket.send(str);
}

function onOpen(evt) {
  console.log('CONNECTED');
  user.checkLogin();
}

function onClose(evt) {
  console.log('DISCONNECTED');
  serverClient.wobsocket = new WebSocket(serverClient.url);
}

function onMessage(evt) {
  var data = JSON.parse(evt.data);
  console.log('RESPONSE: ', data);
  switch (data.type) {
    case 'createGroupResult':
      if (data.status == 'success') {
        group.addSelf();
        onGroupSuccess();
        serverClient.searchPeople();
      }
      else {
        onGroupfail();
      }
      break;
    case 'searchPeopleResult':
      searchResult = data.search;
      break;
    case 'addUser2Group':
      if (data.status == 'success') {
        group.id = data.groupId;
        group.name = data.groupName;
        var member = [];
        for (var i in data.user) {
          var m = data.user[i];
          member.push(new Member(m.id, m.name));
        }
        group.setMember(member);
        gpsMonitor.startMonitor();
        acc.startMonitor();
      }
      break;
    case 'loginResponse':
      if (data.status == 'success') {
        if (Object.keys(data.group).length > 0) {
          group.id = data.group.id;
          group.name = data.group.name;
          var member = [];
          for (var i in data.group.member) {
            var m = data.group.member[i];
            member.push(new Member(m.id, m.name));
          }
          group.setMember(member);
          gpsMonitor.startMonitor();
          acc.startMonitor();
        }
      }
      else {
        console.log('登入失敗');
      }
      break;
    case 'updateLocation':
      group.updateMemberLocation(data.userId, data.lon, data.lat, data.timestamp);
      break;
    case 'updateStatus':
      group.updateMemberStatus(data.userId, data.status, data.timestamp);
      break;
    case 'userLeaveGroup':
      group.userLeaveGroup(data.userId, data.userName);
      break;
    default:
      console.log('ServerClient not match message type');
  }
}

function onError(evt) {
  console.log('ERROR: ' + evt.data);
}

ServerClient.prototype.addUser = function (name, id) {
  this.doSend({
    'type': 'addUser',
    'name': name,
    'id': id
  });
}

ServerClient.prototype.createGroup = function (name, id) {
  this.doSend({
    'type': 'createGroup',
    'name': name,
    'userId': user.id,
    'id': id
  });
}

ServerClient.prototype.searchPeople = function () {
  this.doSend({
    'type': 'searchPeople'
  });
}

ServerClient.prototype.addUser2Group = function (userId, groupId) {
  this.doSend({
    'type': 'addUser2Group',
    'userId': userId,
    'groupId': groupId
  });
}

ServerClient.prototype.leaveGroup = function (userId, groupId) {
  this.doSend({
    'type': 'leaveGroup',
    'userId': userId,
    'groupId': groupId
  });
}

ServerClient.prototype.updateLocation = function (lon, lat, timestamp) {
  this.doSend({
    'type': 'updateLocation',
    'userId': user.id,
    'lon': lon,
    'lat': lat,
    'timestamp': timestamp
  });
}

ServerClient.prototype.updateAcceleration = function (x, y, z) {
  this.doSend({
    'type': 'updateAcceleration',
    'userId': user.id,
    'x': x,
    'y': y,
    'z': z
  });
}

ServerClient.prototype.updateStatus = function (status, timestamp) {
  this.doSend({
    'type': 'updateStatus',
    'userId': user.id,
    'status': status,
    'timestamp': timestamp
  });
}

var serverClient = new ServerClient();
