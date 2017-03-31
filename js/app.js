// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(["$routeProvider", function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'contactController'
            });
    }]);

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', ["$scope", function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look !';
    }]);

    scotchApp.controller('aboutController', ["$scope", function($scope) {
        $scope.message = 'Look! I am an about page.';
    }]);

    scotchApp.controller('contactController', ["$scope", function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    }]);