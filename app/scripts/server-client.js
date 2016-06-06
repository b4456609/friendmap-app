function ServerClient() {
  //Constructor
  this.wobsocket = null;
  this.url = "ws://localhost:8080/friendmap-server/test";
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
  console.log("SENT: " + str);
  //開發功能是測試用
  // this.websocket.send(str);
}

function onOpen(evt) {
  console.log("CONNECTED");
}

function onClose(evt) {
  console.log("DISCONNECTED");
  serverClient.wobsocket = new WebSocket(serverClient.url);
}

function onMessage(evt) {
  console.log('RESPONSE: ' + evt.data);
  var data = JSON.parse(evt.data);
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
      group.setMember(data.user);
      if(data.status == 'success'){
      }
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
    "type": "addUser",
    "name": name,
    "id": id
  });
}

ServerClient.prototype.createGroup = function (name, id) {
  this.doSend({
    "type": "createGroup",
    "name": name,
    "userId": user.id,
    "id": id
  });
}

ServerClient.prototype.searchPeople = function () {
  this.doSend({
    "type": "searchPeople"
  });
}

ServerClient.prototype.addUser2Group = function (userId, groupId) {
  this.doSend({
    "type": "addUser2Group",
    "userId": userId,
    "groupId": groupId
  });
}

ServerClient.prototype.leaveGroup = function (userId, groupId) {
  this.doSend({
    "type": "leaveGroup",
    "userId": userId,
    "groupId": groupId
  });
}

ServerClient.prototype.updateLocation = function (lon, lat, timestamp) {
  this.doSend({
    "type": "updateLocation",
    "userId": user.id,
    "lon": lon,
    "lat": lat,
    "timestamp": timestamp
  });
}

ServerClient.prototype.updateAcceleration = function (x, y, z) {
  this.doSend({
    "type": "updateAcceleration",
    "userId": user.id,
    "x": x,
    "y": y,
    "z": z
  });
}

ServerClient.prototype.updateStatus = function (status) {
  this.doSend({
    "type": "updateStatus",
    "userId": user.id,
    "status": status
  });
}

var serverClient = new ServerClient();
