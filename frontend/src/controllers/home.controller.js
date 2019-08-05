(function() {
    'use strict';

    app.controller('homeCtrl', function($scope) {
        $scope.menuItems = {
            options:
            [{menu:'Home',link:'#',class:"nav-link",datatoggle:""},
            {menu: 'Movies',link:"/index.html#!/movies",class:"nav-link",datatoggle:""},
            {menu: 'Login/Register',link:"#myModal",class:"nav-link trigger-btn", datatoggle:"modal"}]};
        $scope.activeMenu = $scope.menuItems.options[0];
        $scope.setActive = function(menuItem) {
            $scope.activeMenu = menuItem
         }
    })

}());