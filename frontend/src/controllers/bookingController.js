app.controller('bookingController', ['$scope', '$http', '$routeParams', '$log', '$location', '$window', 'userService', 'ngDialog', '$rootScope',
    function($scope, $http, $routeParams, $log, $location, $window, userService, ngDialog, $rootScope) {

        if (!userService.isUserLogged()) {
            $location.path('/movies');
            return;
        }

        $scope.movieId = $routeParams.movieId;
        $scope.movieDate = $rootScope.data;

        $scope.selectedSeats = [];
        $http.get(`https://localhost:5001/api/seats/${$scope.movieId}/${$scope.movieDate}`)
            .then((response) => {
                $scope.seats = response.data;
                console.log($scope.seats);
            })
            .catch((error) => {
                console.log("Error fetching seats" + error.data)
            })

        $scope.selectSeat = function(seat) {

            let arrayIndex = $scope.selectedSeats.indexOf(seat.seat_no);

            if (arrayIndex == -1) { // item not in array 
                $scope.selectedSeats.push(seat.seat_no);
            } else {
                $scope.selectedSeats.splice(arrayIndex, 1);
            }

            $scope.seatsAsString = $scope.selectedSeats.join(',');

            if (seat.check === true) {
                seat.check = false;
            } else {
                seat.check = true;
            }
         
        
        }
       
        $scope.isConfirmed = function() {
            return false;
        }
        $scope.noSeat = function() {
            if ($scope.selectedSeats.length === 0) {
                return true;
            } else return false;
        }
        $scope.storeSeat = function() {
            $scope.isConfirmed = function() {
                return true;
            }
            $scope.nrSeats = $scope.selectedSeats.length;

            var data = {
                movieid: $scope.movieId,
                date: $scope.movieDate,
                seatslist: $scope.selectedSeats,
                userid: $window.sessionStorage.userId
            }
            console.log($scope.selectedSeats)

            $http
            // .post('http://localhost:3000/bookings', data)
                .post('https://localhost:5001/api/booking', data)
                .then((response) => {
                    $scope.booking = response.data;
                })
                .catch((error) => {
                    console.log(error);
                    return;
                })

            let modalScope = $scope;

            var dialog = ngDialog.open({
                template: 'views/partials/modals/confirmation.html',
                className: 'ngdialog-theme-default',
                scope: modalScope,
                controller: 'bookingController',
                width: 400,
                height: 'auto',
                showClose: true
            });
            dialog.closePromise.then(function() {
                window.location.replace("http://localhost:8080/index.html#!/movies");
            });

        }
    }
]);