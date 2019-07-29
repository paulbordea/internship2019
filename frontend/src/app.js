'use strict';

var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(config).run(run);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'index.html',
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
        .when('/views/movies',{
            controller: 'moviesCtrl',
            templateUrl: 'views/movies.html',
            controllerAs : 'vm'

        })
        .otherwise({ redirectTo: '/' });
}

run.$inject = ['$rootScope', '$location', '$cookies', '$http'];

function run($rootScope, $location, $cookies, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/');
        }
    });
}