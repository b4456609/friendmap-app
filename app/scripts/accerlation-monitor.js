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


/**
* @return {null}
*/
AccerlationMonitor.prototype.startMonitor = function(){
    //TODO: Implement Me
    var s=0;
    window.addEventListener('devicemotion', function(event) {
        var accel_X = event.acceleration.x;
        var accel_Y = event.acceleration.y;
        var accel_Z = event.acceleration.z;
       
       if(Math.abs(accel_X.toFixed(2))>10)
       {console.log(event.acceleration.z+' m/s^2');
			if(Math.abs(accel_Y.toFixed(2))>10)
			{
				console.log(event.acceleration.y+' 1111');
			}else if(Math.abs(accel_Z.toFixed(2))>10)
			{
				console.log(event.acceleration.z+' 2222');
			}
	   }
       else if(Math.abs(accel_Y.toFixed(2))>10)
       {
           if(Math.abs(accel_Z.toFixed(2))>10)
			{
				console.log(event.acceleration.z+' 3333');
			}else if(Math.abs(accel_X.toFixed(2))>10)
			{
				console.log(event.acceleration.x+' 4444');
			}
       }else if(Math.abs(accel_Z.toFixed(2))>10)
       {
           if(Math.abs(accel_Y.toFixed(2))>10)
			{
				console.log(event.acceleration.y+' 5555');
			}else if(Math.abs(accel_X.toFixed(2))>10)
			{
				console.log(event.acceleration.x+' 6666');
			}
       }
	   if(Math.abs(accel_X.toFixed(2))+Math.abs(accel_Y.toFixed(2))+Math.abs(accel_Z.toFixed(2))>30)
	   {
			if(Math.abs(accel_X.toFixed(2))>5&&Math.abs(accel_Y.toFixed(2))>5&&Math.abs(accel_Z.toFixed(2)>5))
				console.log(Math.abs(accel_X.toFixed(2))+Math.abs(accel_Y.toFixed(2))+Math.abs(accel_Z.toFixed(2))+' 7777');
	   }
	   //console.log(event.acceleration.y+' yyyy');
    });

};

/**
* @return {null}
*/
AccerlationMonitor.prototype.stopMonitor = function(){
    //TODO: Implement Me
    var s;
};


var accerlation = new AccerlationMonitor();
//accerlationMonitor.startMonitor();