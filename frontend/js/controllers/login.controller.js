

    angular
        .module('app')
        .controller('loginCtrl', function($scope, $rootScope, $log, AuthService){
        $scope.credentials={
            username:'',
            password: ''
        }
        $scope.login=function (credentials){
            $log.info("asdas");
            AuthService.login(credentials).then(function(user){
                $rootScope.$broadcast("AUTH_EVENTS.loginSuccess");
                $ScopedCredential.setCurrentUser(user);
            },function(){
                $rootScope.$broadcast("AUTH_EVENTS.loginFailed");
            });
        };
    })
    