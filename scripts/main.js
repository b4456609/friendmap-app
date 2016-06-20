"use strict";function GPSMonitor(){this.timestamp=null,this.lat=null,this.lon=null,this.gpsInterval=null}function successPosition(e){var t=e.coords.latitude,o=e.coords.longitude;console.log("Latitude is "+t+" Longitude is "+o);var r=(new Date).getTime();console.log("time:"+r),serverClient.updateLocation(o,t,r),group.updateSelfLocation(o,t,r)}function errorPosition(){console.log("Unable to retrieve your location")}function ServerClient(){this.wobsocket=null,this.url="wss://140.121.101.163:9443/friendmap-server/test"}function onOpen(e){console.log("CONNECTED"),myApp.addNotification({hold:1e3,title:"Friendmap",message:"成功連線"}),user.checkLogin()}function onClose(e){console.log("DISCONNECTED"),serverClient.wobsocket=new WebSocket(serverClient.url)}function onMessage(e){var t=JSON.parse(e.data);switch(console.log("RESPONSE: ",t),t.type){case"createGroupResult":"success"==t.status?(group.addSelf(),onGroupSuccess(),serverClient.searchPeople()):onGroupfail();break;case"searchPeopleResult":searchResult=t.search;break;case"addUser2Group":if("success"==t.status){group.id=t.groupId,group.name=t.groupName;var o=[];for(var r in t.user){var n=t.user[r];o.push(new Member(n.id,n.name))}group.setMember(o),gpsMonitor.startMonitor(),acc.startMonitor()}break;case"loginResponse":if("success"==t.status){if(Object.keys(t.group).length>0){group.id=t.group.id,group.name=t.group.name;var o=[];for(var r in t.group.member){var n=t.group.member[r];o.push(new Member(n.id,n.name))}group.setMember(o),gpsMonitor.startMonitor(),acc.startMonitor()}}else console.log("登入失敗");break;case"updateLocation":group.updateMemberLocation(t.userId,t.lon,t.lat,t.timestamp);break;case"updateStatus":group.updateMemberStatus(t.userId,t.status,t.timestamp);break;case"userLeaveGroup":group.userLeaveGroup(t.userId,t.userName);break;default:console.log("ServerClient not match message type")}}function onError(e){console.log("ERROR: "+e.data)}function User(){this.name="訪客"+(new Date).getTime(),this.id=""+(new Date).getTime(),this.accessToken=null}function statusChangeCallback(e){console.log("statusChangeCallback"),console.log(e),"connected"===e.status?(user.accessToken=e.authResponse.accessToken,user.setUserFromFB()):FB.login(function(e){user.setUserFromFB()})}function Group(){this.id=null,this.members=[],this.name=null,this.memberCounter=0}function Member(e,t){this.groupMemberID=null,this.id=e,this.name=t,this.status={status:"happy",timestamp:null},this.location={lon:0,lat:null,timestamp:null},this.marker={type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{title:t,description:"("+this.location.lon+","+this.location.lat+")",image:"http://graph.facebook.com/"+e+"/picture",icon:{iconUrl:"images/happy.png",iconSize:[50,75],iconAnchor:[25,75],popupAnchor:[0,-25],className:"dot"}}}}function setSidebarName(){document.getElementById("user-name").innerHTML=user.name}function validGroupOrReturnToIndex(){group.isValidGroup()||"group"==mainView.activePage.name&&myApp.alert("請等待邀請或建立新的群組",function(){mainView.router.loadPage("index.html")})}function Map(){this.map=null,this.label=null,this.geojson=[],this.myLayer=null}function AccerlationMonitor(){this.x=null,this.y=null,this.z=null,this.timestamp=(new Date).getTime(),this.interval=null}function onDeviceMotion(e){if("number"==typeof e.acceleration.x&&"number"==typeof e.acceleration.y&&"number"==typeof e.acceleration.z&&(acc.x=e.acceleration.x,acc.y=e.acceleration.y,acc.z=e.acceleration.z,Math.abs(acc.x.toFixed(2))+Math.abs(acc.y.toFixed(2))+Math.abs(acc.z.toFixed(2))>60&&Math.abs(acc.x.toFixed(2))>10&&Math.abs(acc.y.toFixed(2))>10&&Math.abs(acc.z.toFixed(2))>10)){console.log(Math.abs(acc.x.toFixed(2))+Math.abs(acc.y.toFixed(2))+Math.abs(acc.z.toFixed(2))+" 7777");var t=(new Date).getTime();group.updateSelfStatus("gg",t)}}function onAddPeopleSuccess(e){e!==user.name&&myApp.addNotification({hold:2e3,title:"加入成功",message:e+" 成為新的成員"}),updateMemberList()}function updateMemberList(){if("group"==mainView.activePage.name){var e="";for(var t in group.members){var o='<li class="item-content"><div class="item-inner"><div class="item-title">'+group.members[t].name+"</div></div></li>";e+=o}$$("#members").html(e)}}function onAddPeopleFail(){myApp.addNotification({hold:2e3,title:"加入失敗",message:"請稍重試"})}function leaveGroup(){myApp.confirm("確定要離開群組嗎?",function(){serverClient.leaveGroup(user.id,group.id),gpsMonitor.stopMonitor(),acc.stopMonitor(),group=new Group,mainView.router.loadPage("index.html")})}function onMemberLeave(e){e!==user.name&&myApp.addNotification({hold:2e3,title:"離開群組",message:e+" 離開群組"}),updateMemberList()}function valueToStatusIndex(e){return"happy"===e?0:"warning"===e?1:"gg"===e?2:void 0}function valueToStatusName(e){return"happy"===e?"開心":"warning"===e?"緊急":"gg"===e?"GG":void 0}function statusIndexToValue(e){return 0===e?"happy":1===e?"warning":2===e?"gg":void 0}function updateStatus(){var e=statusIndexToValue($$("select")[0].selectedIndex);console.log(e),group.updateSelfStatus(e,(new Date).getTime())}function updateMapInMapPage(){"map"==mainView.activePage.name&&map.drawAllMembers()}function onGroupSuccess(){myApp.addNotification({hold:2e3,title:"建立成功",message:"現在可以加入新的成員了"}),mainView.router.loadPage("group.html")}function onGroupfail(){myApp.addNotification({hold:2e3,title:"建立失敗",message:"請檢查連線狀態，稍候在重試"})}function makeFakeDataToServer(){serverClient.addUser("apple",(new Date).getTime()+""),serverClient.addUser("banana",(new Date).getTime()+1+""),serverClient.addUser("test",(new Date).getTime()+1+""),serverClient.addUser("name",(new Date).getTime()+1+""),serverClient.addUser("ㄏㄏ",(new Date).getTime()+1+"")}function test(){user.login(),group.createGroup("name"),serverClient.createGroup(group.name,group.id)}function memberTest(){var e=[],t=(new Date).getTime(),o=new Member(t+1+"","rdrrmew");o.setUserLocation(121.779872,25.150964,t),o.setUserStatus("happy",t),e.push(o);var r=new Member(t+2+"","afasd");r.setUserLocation(121.779872,25.150964,t),r.setUserStatus("gg",t),e.push(r);var n=new Member(t+3+"","uglydog");n.setUserLocation(121.779872,25.150964,t),n.setUserStatus("warning",t),e.push(n),console.log(e),group.setMember(e)}function testMockLocation(){var e=(new Date).getTime();serverClient.updateLocation(keelungToNtou[gpsIndex+1],keelungToNtou[gpsIndex],e),group.updateSelfLocation(keelungToNtou[gpsIndex+1],keelungToNtou[gpsIndex],e),gpsIndex+=2}function demoLocation(){gpsIndex=0;window.setInterval(testMockLocation,500)}GPSMonitor.prototype.getGPS=function(){navigator.geolocation||console.log("Geolocation is not supported by your browser"),navigator.geolocation.getCurrentPosition(successPosition,errorPosition)},GPSMonitor.prototype.startMonitor=function(){this.gpsInterval=window.setInterval(this.getGPS,5e3)},GPSMonitor.prototype.stopMonitor=function(){window.clearInterval(this.gpsInterval)};var gpsMonitor=new GPSMonitor;ServerClient.prototype.init=function(e){null===this.wobsocket&&(this.websocket=new WebSocket(this.url),this.websocket.onopen=function(e){onOpen(e)},this.websocket.onclose=function(e){onClose(e)},this.websocket.onmessage=function(e){onMessage(e)},this.websocket.onerror=function(e){onError(e)})},ServerClient.prototype.doSend=function(e){var t=JSON.stringify(e);console.log("SENT: ",e),this.websocket.send(t)},ServerClient.prototype.addUser=function(e,t){this.doSend({type:"addUser",name:e,id:t})},ServerClient.prototype.createGroup=function(e,t){this.doSend({type:"createGroup",name:e,userId:user.id,id:t})},ServerClient.prototype.searchPeople=function(){this.doSend({type:"searchPeople"})},ServerClient.prototype.addUser2Group=function(e,t){this.doSend({type:"addUser2Group",userId:e,groupId:t})},ServerClient.prototype.leaveGroup=function(e,t){this.doSend({type:"leaveGroup",userId:e,groupId:t})},ServerClient.prototype.updateLocation=function(e,t,o){this.doSend({type:"updateLocation",userId:user.id,lon:e,lat:t,timestamp:o})},ServerClient.prototype.updateAcceleration=function(e,t,o){this.doSend({type:"updateAcceleration",userId:user.id,x:e,y:t,z:o})},ServerClient.prototype.updateStatus=function(e,t){this.doSend({type:"updateStatus",userId:user.id,status:e,timestamp:t})};var serverClient=new ServerClient;User.prototype.setUserFromFB=function(){var e=this;FB.api("/me",function(t){e.name=t.name,e.id=t.id,localStorage.setItem("id",e.id),localStorage.setItem("name",e.name),setSidebarName(),serverClient.addUser(e.name,e.id),myApp.closeModal()})},User.prototype.checkFBStatus=function(){FB.getLoginStatus(function(e){statusChangeCallback(e)})},User.prototype.login=function(){this.checkFBStatus()},User.prototype.checkLogin=function(){null===localStorage.getItem("id")?(console.log("user not login"),myApp.loginScreen()):(user.id=localStorage.getItem("id"),user.name=localStorage.getItem("name"),setSidebarName(),serverClient.addUser(user.name,user.id))};var user=new User;Group.prototype.isValidGroup=function(){return null!==this.id},Group.prototype.createGroup=function(e){this.id=(new Date).getTime(),this.name=e,gpsMonitor.startMonitor(),acc.startMonitor()},Group.prototype.addSelf=function(){this.members.push(new Member(user.id,user.name))},Group.prototype.setMember=function(e){for(var t in e){for(var o=0;o<this.members.length&&e[t].id!==this.members[o].id;o++);o===this.members.length&&(this.members.push(e[t]),onAddPeopleSuccess(e[t].name))}this.memberCounter=this.members.length},Group.prototype.updateSelfStatus=function(e,t){for(var o in this.members)if(this.members[o].id===user.id){this.members[o].setUserStatus(e,t);break}serverClient.updateStatus(e,t)},Group.prototype.updateMemberLocation=function(e,t,o,r){for(var n in this.members)if(this.members[n].id===e){this.members[n].setUserLocation(t,o,r);break}updateMapInMapPage()},Group.prototype.updateMemberStatus=function(e,t,o){for(var r in this.members)if(this.members[r].id===e){this.members[r].setUserStatus(t,o);break}updateMapInMapPage()},Group.prototype.updateSelfLocation=function(e,t,o){for(var r in this.members)if(this.members[r].id===user.id){this.members[r].setUserLocation(e,t,o);break}updateMapInMapPage()},Group.prototype.getSelfStatus=function(){for(var e in this.members)if(this.members[e].id===user.id)return this.members[e].status.status},Group.prototype.userLeaveGroup=function(e,t){for(var o in this.members)this.members[o].id===e&&this.members.splice(o,1);onMemberLeave(t)},Group.prototype.testResetPosition=function(e,t,o,r){for(var n=0;n<this.members.length&&this.members[n].id!=e;n++);this.members[e].setUserLocation(t,o,r),map.drawAllMembers()},Group.prototype.testResetStatus=function(e,t,o){for(var r=0;r<this.members.length&&this.members[r].id!=e;r++);this.members[e].setUserStatus(t,o),map.drawAllMembers()},Member.prototype.setUserLocation=function(e,t,o){this.location.lon=e,this.location.lat=t,this.location.timestamp=o,this.marker.geometry.coordinates=[e,t],this.marker.properties.description="( "+this.location.lon+" , "+this.location.lat+" )"},Member.prototype.setUserStatus=function(e,t){this.status.status=e,this.status.timestamp=t,this.marker.properties.icon.iconUrl="images/"+e+".png"};var group=new Group;serverClient.init();var myApp=new Framework7({modalTitle:"FriendMap",pushState:!0,onAjaxStart:function(e){myApp.showIndicator()},onAjaxComplete:function(e){myApp.hideIndicator()}}),$$=Dom7;$$(".login-screen").on("opened",function(){console.log("open login"),$$("#fb-login").on("click",function(e){user.login()})});var mainView=myApp.addView(".view-main",{dynamicNavbar:!0});L.mapbox.accessToken="pk.eyJ1IjoiYjQ0NTY2MDkiLCJhIjoiY2lveWVqZTRpMDF3dnVjbTh5N2V1aXBkeiJ9.0IYd1v5vsG3gqNb3wLYuIw",Map.prototype.initmap=function(){this.map=L.mapbox.map("map","mapbox.streets",{center:[25.150911,121.780102],zoom:16}),this.myLayer=L.mapbox.featureLayer().addTo(this.map)},Map.prototype.drawAllMembers=function(){this.map.removeLayer(this.myLayer),this.myLayer=L.mapbox.featureLayer().addTo(this.map),this.geojson=[];for(var e=0;e<group.members.length;e++)this.geojson.push(group.members[e].marker);this.myLayer.on("layeradd",function(e){var t=e.layer,o=t.feature;t.setIcon(L.icon(o.properties.icon));var r="<h2>"+o.properties.title+"</h2><p>"+o.properties.description+'</p><img src="'+o.properties.image+'" alt="" style="width:60px;height:60px;">';t.bindPopup(r)}),this.myLayer.setGeoJSON(this.geojson)};var map=new Map;AccerlationMonitor.prototype.updateToServer=function(){console.log(this.x,this.y,this.z,this),"number"==typeof this.x&&"number"==typeof this.y&&"number"==typeof this.z&&serverClient.updateAcceleration(this.x,this.y,this.z)},AccerlationMonitor.prototype.startMonitor=function(){this.interval=window.setInterval(this.updateToServer,2e3),window.addEventListener("devicemotion",onDeviceMotion)},AccerlationMonitor.prototype.stopMonitor=function(){window.clearInterval(this.interval),window.removeEventListener("devicemotion",onDeviceMotion)};var acc=new AccerlationMonitor;myApp.onPageInit("group",function(e){validGroupOrReturnToIndex("group");myApp.autocomplete({input:"#autocomplete-dropdown-expand",openIn:"dropdown",preloader:!0,expandInput:!0,source:function(e,t,o){serverClient.searchPeople();var r=[];return 0===t.length?void o(searchResult.map(function(e){return e.name})):(e.hidePreloader(),void setTimeout(function(){for(var e=0;e<searchResult.length;e++)searchResult[e].name.toLowerCase().indexOf(t.toLowerCase())>=0&&r.push(searchResult[e].name);o(r)},300))},onChange:function(e,t){console.log("autocomplete select",t);for(var o=0;o<searchResult.length;o++)if(t===searchResult[o].name)return void serverClient.addUser2Group(searchResult[o].id,group.id)}});updateMemberList(),$$("#leave-group").on("click",leaveGroup),$$("#group-page-name").html(group.name)});var searchResult=[];myApp.onPageInit("status",function(e){var t=group.getSelfStatus();console.log(t),void 0!==t&&($$("select")[0].selectedIndex=valueToStatusIndex(t),$$(".item-after").html(valueToStatusName(t)))}),myApp.onPageInit("map",function(e){map.initmap(),map.drawAllMembers()}),myApp.onPageInit("create-group",function(e){$$(document).on("click","#submit",function(e){var t=$$("#group-name").val();console.log("送出",t),""===t?myApp.alert("請輸入群組名稱","錯誤"):(group.createGroup(t),serverClient.createGroup(group.name,group.id))})});var keelungToNtou=[25.13072,121.74082,25.13085,121.74092,25.13071,121.74117,25.13044,121.74167,25.13014,121.74216,25.13021,121.74231,25.13024,121.7425,25.13027,121.74264,25.13031,121.74275,25.13048,121.74299,25.13073,121.74315,25.13085,121.74322,25.13096,121.7432,25.13103,121.74325,25.13117,121.7433,25.13129,121.74338,25.13133,121.74349,25.13226,121.7441,25.13472,121.74574,25.13498,121.74592,25.13512,121.74595,25.13567,121.74626,25.13609,121.7465,25.13625,121.74662,25.1364,121.74678,25.13649,121.74695,25.13686,121.74764,25.13696,121.74811,25.13709,121.74842,25.13764,121.74943,25.13921,121.75231,25.13934,121.75254,25.13934,121.75258,25.13934,121.75262,25.13932,121.75282,25.13933,121.7529,25.1392,121.75319,25.13917,121.75331,25.13918,121.75349,25.1393,121.75392,25.13943,121.75432,25.1396,121.7547,25.13981,121.75495,25.14011,121.75524,25.14034,121.75541,25.14046,121.75556,25.14064,121.75587,25.14089,121.75658,25.14092,121.75672,25.1409,121.75693,25.14066,121.75773,25.14061,121.75792,25.1406,121.75806,25.14061,121.75818,25.14062,121.75823,25.14057,121.75894,25.14052,121.75954,25.14065,121.75998,25.14121,121.76173,25.14161,121.76275,25.14192,121.76352,25.14212,121.76402,25.14229,121.76438,25.14241,121.76455,25.14264,121.7648,25.14275,121.7649,25.14302,121.76518,25.14357,121.76589,25.14374,121.76607,25.14402,121.76649,25.14415,121.76666,25.14431,121.76706,25.1446,121.76767,25.14496,121.7682,25.14553,121.76894,25.14592,121.76962,25.14606,121.76981,25.14649,121.77029,25.14677,121.77046,25.14788,121.77108,25.14853,121.77142,25.14897,121.77159,25.14943,121.77177,25.14951,121.77182,25.14962,121.77192,25.14985,121.77213,25.14997,121.77222,25.15008,121.77226,25.1503,121.77226,25.15065,121.77223,25.15074,121.77227,25.15094,121.77236,25.15094,121.77239,25.15101,121.77275,25.15106,121.77312,25.15107,121.77342,25.15089,121.77536,25.15087,121.77562,25.1509,121.77573,25.15127,121.77662,25.15131,121.77682,25.15129,121.77706,25.15117,121.77755,25.1507,121.77921,25.15056,121.77978,25.1504,121.78025,25.1499,121.78135,25.14962,121.78183,25.14925,121.78235,25.14916,121.78245],gpsIndex=0;