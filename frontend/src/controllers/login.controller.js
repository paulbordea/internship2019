(function() {
    'use strict';

    app.controller('loginCtrl', function($scope,$location, $rootScope, $log, AuthService) {
        $scope.credentials = {
            username: '',
            password: ''
        }
        $scope.login = function(credentials) {
            AuthService.login(credentials).then(function(user) {
              
                $rootScope.$broadcast("AUTH_EVENTS.loginSuccess");
                //$ScopedCredential.setCurrentUser(user);
            }, function() {
                $rootScope.$broadcast("AUTH_EVENTS.loginFailed");
            });
        };
    })

}());