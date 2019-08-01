'use strict';

var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(config).run(run);
// app.config(['$qProvider', function($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'views/partials/carousel.html',
        })
        .when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'views/partials/modals/login/loginModal.view.html',
            controllerAs: 'vm'
        })
        .when('/register', {
            controller: 'registerCtrl',
            templateUrl: 'views/partials/modals/register/register.view.html',
            controllerAs: 'vm'
        })
        .when('/movies', {
            controller: 'moviesCtrl',
            templateUrl: 'views/movies.html',
            controllerAs: 'vm'
         

        })
        .when('/adminpage',{
            controller: 'moviesCtrl',
            templateUrl: 'views/adminpage.html',
            controllerAs : 'vm'

        })
        .otherwise({ redirectTo: '/' });
}

run.$inject = ['$rootScope', '$location', '$cookies', '$http'];

function run($rootScope, $location, $cookies, $http) {
    
}