
angular.module("app").factory('AuthService',function($http){
    var AuthService={};
    AuthService.login=function(credentials){
        return $http
        .post('/login',credentials)
        .then(function(res){
            //Session.create(res.data.id,res.data.user.id,res.data.user.role);
            return res.data.user;
        });
    };
    AuthService.isAuthenticated=function(){
        //return !!Session.userId;
        return true;
    };
    AuthService.isAuthorized=function(authorizedRoles){
       /*  if(!angular.isArray(authorizedRoles)){
            authorizedRoles=[authorizedRoles];
        }
        return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole)!== -1); */
    };
    return AuthService;
    
    });