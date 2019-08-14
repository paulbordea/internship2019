app.controller('bookingController', ['$scope', '$window', '$http', '$routeParams', '$log', 'seatsManager',
    function($scope, $window, $http, $routeParams, $log, seatsManager) {
        var init = function() {

            $scope.movieId = $routeParams.movieId;
            $scope.standardSeats = seatsManager.getSeats('Standard');
            $scope.seats = seatsManager;

            $http.get("http://localhost:3000/seats1")
                .then((response) => {
                    $scope.seats1 = response.data;
                    $log.log('Seats: ' + JSON.stringify($scope.seats1));
                })
                .catch((error) => {
                    $log.log("Error fetching seats: " + JSON.stringify(error));
                });

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
            }, ];

            $scope.seatQuality = 'Standard';
            $scope.selectedCount = $scope.quantities[1];
            seatsManager.setAvailCount($scope.selectedCount);
        }


        function storeSeatInSession(rang, row, seatIndex) {
            if (angular.isUndefined(currentSelectionSession
                    .checkedSeats[rang])) {
                currentSelectionSession
                    .checkedSeats[rang] = [];
            }
            var seat = angular.copy(row[seatIndex]);
            delete seat['$$hashKey'];
            delete seat['check'];
            delete seat['booked'];        
            currentSelectionSession.checkedSeats[rang].push(seat);
             console.log(currentSelectionSession);
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
    }
]);