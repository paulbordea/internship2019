app.controller('bookingController', ['$scope', '$http', '$routeParams', '$log', '$location', '$window', 'userService','ngDialog',
    function($scope, $http, $routeParams, $log, $location, $window, userService,ngDialog) {

        if (!userService.isUserLogged()) {
            $location.path('/movies');
            return;
        }

        $scope.movieId = $routeParams.movieId;
        $scope.selectedSeats = [];

        $http.get(`http://localhost:3000/movies?id=${$scope.movieId}`)
            .then((response) => {

                if (response.data && response.data.length > 0) {
                    $scope.bookMovie = response.data[0];
                }
            })
            .catch((error) => {
                $log.log(`Error fetching movie with id: ${movieId}`);
            });

       $http.get("http://localhost:3000/seats")
        //$http.get("https://localhost:5001/api/seats/5/8/13/2019")
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

            if (seat.check === true) {
                seat.check = false;
            } else {
                seat.check = true;
            }

        }
        $scope.isConfirmed = function() {
            return false;
        }
        $scope.noSeat= function() {
            if( $scope.selectedSeats.length===0){
                return true;
            }
           else return false;
        }
        $scope.storeSeat = function() {
            $scope.isConfirmed = function() {
                return true;
            }
            $scope.nrSeats = $scope.selectedSeats.length;
          
            var data = {
                movieId: $scope.movieId,
                date: $scope.bookMovie.date,
                time: $scope.bookMovie.time,
                seatsBooked: $scope.selectedSeats.join(', '),
                userId: $window.sessionStorage.userId,
                movieTitle: $scope.bookMovie.title
            }

            $http
                .post('http://localhost:3000/bookings', data)
                .then((response) => {
                   $scope.booking=response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
             
         let modalScope = $scope;
       
           var dialog= ngDialog.open({
                template: 'views/partials/modals/confirmation.html',
                className: 'ngdialog-theme-default',
                scope: modalScope,
                controller: 'bookingController',
                width: 400,
                height: 'auto',
                showClose: true
            });
            dialog.closePromise.then(function () {
                window.location.replace("http://localhost:8080/index.html#!/movies");
            });
        
        }
    }
]);