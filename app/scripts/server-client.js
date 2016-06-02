function ServerClient() {
  //Constructor
  this.wobsocket = null;
  this.url = "ws://localhost:8080/friendmap-server/test";
}

ServerClient.prototype.init = function (params) {
  this.websocket = new WebSocket(this.url);
  this.websocket.onopen = function (evt) { onOpen(evt) };
  this.websocket.onclose = function (evt) { onClose(evt) };
  this.websocket.onmessage = function (evt) { onMessage(evt) };
  this.websocket.onerror = function (evt) { onError(evt) };
}

ServerClient.prototype.doSend = function (message) {
  writeToScreen("SENT: " + message);
  this.websocket.send(message);
}

function onOpen(evt) {
  console.log("CONNECTED");
}

function onClose(evt) {
  console.log("DISCONNECTED");
}

function onMessage(evt) {
  console.log('RESPONSE: ' + evt.data);
  var data = JSON.parse(evt.data);
  switch (data.type) {
    case 'createGrouprResult':
      group.successCreateGroup();
      break;
    default:
      console.log('ServerClient not match message type');
  }
}

function onError(evt) {
  console.log('ERROR: ' + evt.data);
}

ServerClient.prototype.addUser = function (message) {
  this.doSend({
    "type": "addUser",
    "name": "王建民",
    "id": "2134548458"
  });
}

ServerClient.prototype.createGroup = function (message) {
  this.doSend({
    "type": "addUser",
    "name": "棒球群組",
    "id": "1464767827233",
    "member": ["2134548458"]
  });
}

var serverClient = new ServerClient();
