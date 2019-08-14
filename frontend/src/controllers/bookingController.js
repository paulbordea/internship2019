
    app.controller('quantityModuleController',['$scope','$window','$http','seatsManager', function($scope, $window, $http,seatsManager) {
        var init = function() {
          
            $scope.standardSeats = seatsManager.getSeats('Standard');
            $scope.seats = seatsManager;
            $scope.quantities = [{
                id: 0,
                val: 0
            }, {
                id: 1,
                val: 1
            }, {
                id: 2,
                val: 2
            }, {
                id: 3,
                val: 3
            }, {
                id: 4,
                val: 4
            },
        {
            id:5,
            val:5
        },
    {
        id:6,
        val:6
    } ];
           
            $scope.seatQuality = 'Standard';
            $scope.selectedCount = $scope.quantities[1];
            seatsManager.setAvailCount($scope.selectedCount);
        }

        $scope.storeSeat = function() {
            if ($scope.seats.availCount.val != 0) {
                $window.alert("You haven't selected " +
                    $scope.seats.availCount.val + " seats");
                return;
            }
            var sessionInfo = seatsManager.bookCheckedSeats();
            seatsManager.setAvailCount($scope.selectedCount);

            console.log(sessionInfo.checkedSeats);

            $scope.alertMsg = [];
            angular.forEach(sessionInfo.checkedSeats, function(v, k) {
                for (var i = 0; i < v.length; i++) {
                    $scope.alertMsg.push(v[i].val + v[i].letter);
                }
                console.log($scope.alertMsg)
            });
            
           /*  $window.alert('Thank you for Booking ' + sessionInfo.count + ' seats. ' + 
                    'Your seats are: ' + $scope.alertMsg.join(', ')); */
                 
        };
      

    init();
}]);


