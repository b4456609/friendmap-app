/**
* Generated On: 2016-6-2
* Class: AccerlationMonitor
*/
var device_acc = null;
function AccerlationMonitor() {
  //Constructor

  this.x = null;
  this.y = null;
  this.z = null;
  this.timestamp = null;

}
function AccelerationDetect() {
  var accel_X = 0.0;
  var accel_Y = 0.0;
  var accel_Z = 0.0;
  if (typeof (this.x) == 'undefined' && typeof (this.y) == 'undefined' && typeof (this.z) == 'undefined') {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  window.addEventListener('devicemotion', function (event) {
    accel_X = event.acceleration.x;
    accel_Y = event.acceleration.y;
    accel_Z = event.acceleration.z;

    this.x = accel_X;
    this.y = accel_Y;
    this.z = accel_Z;

	   //serverClient.updateAcceleration(accel_X,accel_Y,accel_Z);

    /* if(Math.abs(accel_X.toFixed(2))>20)
     {console.log(accel_Z.toFixed(2)+' m/s^2');
    if(Math.abs(accel_Y.toFixed(2))>20)
    {
      console.log(accel_Y.toFixed(2)+' 1111');
    }else if(accel_Z.toFixed(2)>20||accel_Z.toFixed(2)<-20)
    {
      console.log(accel_Z.toFixed(2)+' 2222');
    }
   }
     else if(Math.abs(accel_Y.toFixed(2))>20)
     {
         if(Math.abs(accel_Z.toFixed(2))>20)
    {
      console.log(event.acceleration.z+' 3333');
    }else if(Math.abs(accel_X.toFixed(2))>20)
    {
      console.log(event.acceleration.x+' 4444');
    }
     }else if(Math.abs(accel_Z.toFixed(2))>20)
     {
         if(Math.abs(accel_Y.toFixed(2))>20)
    {
      console.log(event.acceleration.y+' 5555');
    }else if(Math.abs(accel_X.toFixed(2))>20)
    {
      console.log(event.acceleration.x+' 6666');
    }
     }*/
	   if (Math.abs(accel_X.toFixed(2)) + Math.abs(accel_Y.toFixed(2)) + Math.abs(accel_Z.toFixed(2)) > 60) {
      if (Math.abs(accel_X.toFixed(2)) > 10 && Math.abs(accel_Y.toFixed(2)) > 10 && Math.abs(accel_Z.toFixed(2)) > 10) {
        console.log(Math.abs(accel_X.toFixed(2)) + Math.abs(accel_Y.toFixed(2)) + Math.abs(accel_Z.toFixed(2)) + ' 7777');
        var nowTime = new Date();
        console.log('time:' + nowTime);
        group.updateSelfStatus('accident', nowTime);
      }
	   }

  });
  serverClient.updateAcceleration(this.x, this.y, this.z);
  console.log('x: ' + this.x + ' y: ' + this.y + ' z: ' + this.z);
}

/**
* @return {null}
*/
AccerlationMonitor.prototype.startMonitor = function () {
  //TODO: Implement Me

  device_acc = window.setInterval(AccelerationDetect, 1000);

};

/**
* @return {null}
*/
AccerlationMonitor.prototype.stopMonitor = function () {
  //TODO: Implement Me
  window.clearInterval(device_acc);
};


var acc = new AccerlationMonitor();
//accerlationMonitor.startMonitor();
