(function() {
    'use strict';

    app.controller('loginCtrl', function($scope, $rootScope, $log, AuthService) {
        $scope.credentials = {
            username: '',
            password: ''
        }
        $scope.login = function(credentials) {
            AuthService.login(credentials).then(function(user) {
                $log.info(`User found: ` + JSON.stringify(user));

                $rootScope.$broadcast("AUTH_EVENTS.loginSuccess");
                //$ScopedCredential.setCurrentUser(user);
            }, function() {
                $rootScope.$broadcast("AUTH_EVENTS.loginFailed");
            });
        };
    })

}());