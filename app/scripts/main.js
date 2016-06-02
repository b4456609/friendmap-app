// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    // If it is webapp, we can enable hash navigation:
    pushState: true,
     // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },
    onPageBeforeInit: function (app, page) {
        console.log('init onPageInit', user);
        if(user.id == ''){
            console.log('user not login');
            app.loginScreen();
        }
    },
    onPageInit: function (app, page) {
        //設定sidebar使用者的名稱
        document.getElementById("user-name").innerHTML = user.name;
    }
});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
    // Do something here for "about" page
    console.log('index init');
    myApp.loginScreen();
})
