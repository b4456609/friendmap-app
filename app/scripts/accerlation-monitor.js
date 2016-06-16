/**
* Generated On: 2016-6-2
* Class: AccerlationMonitor
*/

function AccerlationMonitor() {
  //Constructor

  this.x = null;
  this.y = null;
  this.z = null;
  this.timestamp = new Date().getTime();
  this.interval = null;

}

AccerlationMonitor.prototype.updateToServer = function () {
  console.log(this.x, this.y, this.z, this);
  if (typeof (this.x) === 'number' && typeof (this.y) === 'number' && typeof (this.z) === 'number') {
    serverClient.updateAcceleration(this.x, this.y, this.z);
  }
}

AccerlationMonitor.prototype.startMonitor = function () {
  this.interval = window.setInterval(this.updateToServer, 2000);
  window.addEventListener('devicemotion', onDeviceMotion);
};

function onDeviceMotion(event) {
  if (typeof (event.acceleration.x) === 'number' && typeof (event.acceleration.y) === 'number' && typeof (event.acceleration.z) === 'number') {
    acc.x = event.acceleration.x;
    acc.y = event.acceleration.y;
    acc.z = event.acceleration.z;
    if (Math.abs(acc.x.toFixed(2)) + Math.abs(acc.y.toFixed(2)) + Math.abs(acc.z.toFixed(2)) > 60) {
      if (Math.abs(acc.x.toFixed(2)) > 10 && Math.abs(acc.y.toFixed(2)) > 10 && Math.abs(acc.z.toFixed(2)) > 10) {
        console.log(Math.abs(acc.x.toFixed(2)) + Math.abs(acc.y.toFixed(2)) + Math.abs(acc.z.toFixed(2)) + ' 7777');
        var nowTime = new Date().getTime();
        // console.log('time:' + nowTime);
        group.updateSelfStatus('gg', nowTime);
      }
    }
  }

  //serverClient.updateAcceleration(acc.x,acc.y,acc.z);

  /* if(Math.abs(acc.x.toFixed(2))>20)
   {console.log(acc.z.toFixed(2)+' m/s^2');
  if(Math.abs(acc.y.toFixed(2))>20)
  {
    console.log(acc.y.toFixed(2)+' 1111');
  }else if(acc.z.toFixed(2)>20||acc.z.toFixed(2)<-20)
  {
    console.log(acc.z.toFixed(2)+' 2222');
  }
 }
   else if(Math.abs(acc.y.toFixed(2))>20)
   {
       if(Math.abs(acc.z.toFixed(2))>20)
  {
    console.log(event.acceleration.z+' 3333');
  }else if(Math.abs(acc.x.toFixed(2))>20)
  {
    console.log(event.acceleration.x+' 4444');
  }
   }else if(Math.abs(acc.z.toFixed(2))>20)
   {
       if(Math.abs(acc.y.toFixed(2))>20)
  {
    console.log(event.acceleration.y+' 5555');
  }else if(Math.abs(acc.x.toFixed(2))>20)
  {
    console.log(event.acceleration.x+' 6666');
  }
   }*/
}

AccerlationMonitor.prototype.stopMonitor = function () {
  window.clearInterval(this.interval);
  window.removeEventListener('devicemotion', onDeviceMotion)
};


var acc = new AccerlationMonitor();
//accerlationMonitor.startMonitor();
