/**
* Generated On: 2016-6-2
* Class: AccerlationMonitor
*/

function AccerlationMonitor(){
    //Constructor

    this.x = null;
    this.y = null;
    this.z = null;
    this.timestamp = null;

}
function AccelerationDetect(){
	window.addEventListener('devicemotion', function(event) {
        var accel_X = event.acceleration.x;
        var accel_Y = event.acceleration.y;
        var accel_Z = event.acceleration.z;
       this.x=accel_X;
	   this.y=accel_Y;
	   this.z=accel_Z;
	   
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
	   if(Math.abs(accel_X.toFixed(2))+Math.abs(accel_Y.toFixed(2))+Math.abs(accel_Z.toFixed(2))>60)
	   {
			if(Math.abs(accel_X.toFixed(2))>10&&Math.abs(accel_Y.toFixed(2))>10&&Math.abs(accel_Z.toFixed(2))>10)
			{	console.log(Math.abs(accel_X.toFixed(2))+Math.abs(accel_Y.toFixed(2))+Math.abs(accel_Z.toFixed(2))+' 7777');
				
			}
	   }
	   
    });
}

/**
* @return {null}
*/
AccerlationMonitor.prototype.startMonitor = function(){
    //TODO: Implement Me
    
    window.setInterval(AccelerationDetect, 1000);

};

/**
* @return {null}
*/
AccerlationMonitor.prototype.stopMonitor = function(){
    //TODO: Implement Me
    
};


var acc = new AccerlationMonitor();
//accerlationMonitor.startMonitor();