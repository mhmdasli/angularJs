/*
* Application Routes
*/

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/login.html"
    })
    .when("/main", {
        templateUrl : "pages/main.html"
    })
});
