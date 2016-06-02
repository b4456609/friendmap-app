function User(){
    this.name = "訪客";
    // this.id = "45616516";
    this.id = new Date().getTime();
}

var user = new User();