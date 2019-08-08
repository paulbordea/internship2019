'use strict';

var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngDialog']);
app.config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'views/partials/carousel.html',
        })
        .when('/movies', {
            controller: 'MoviesCtrl',
            templateUrl: 'views/movies.html',
            controllerAs: 'vm'
        })
        .when('/adminpage', {
            controller: 'admin',
            templateUrl: 'views/adminpage.html',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
}