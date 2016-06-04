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
   /* window.addEventListener('devicemotion', function(event) {
        console.log(event.acceleration.x + ' m/s2');
    });*/
};

/**
* @return {null}
*/
AccerlationMonitor.prototype.stopMonitor = function(){
    //TODO: Implement Me
    var s;
};


var accerlationMonitor = new AccerlationMonitor();
accelerationMonitor.startMonitor();