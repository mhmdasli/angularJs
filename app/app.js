var app = angular.module('app', ["ngRoute"]);

//Login Page Controller
app.controller("loginController", function ($scope, $location) {
    $scope.submit = function () {
        if ($scope.password === '123') {
            $location.path('/main')
        } else {
            $scope.message = 'Wrong password'
        }
    };
});
// Main Page Controller
app.controller("mainController", function ($scope, $location) {
    $scope.logout = function () {

            $location.path('/')
       
    };
});


