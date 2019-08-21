app.controller('bookingController', ['$scope', '$http', '$routeParams', '$log', '$location','$rootScope',
    function($scope, $http, $routeParams, $log, $location,$rootScope) {

        $scope.movieId = $routeParams.movieId;

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
            .then((response) => {
                $scope.seats = response.data;
            })
            .catch((error) => {
                console.log("Error fetching seats" + error.data)
            })

        $scope.select = function(seat) {
            if (seat.check === true) {
                seat.check = false;
            } else {
                seat.check = true;
            }
        }
        $scope.isConfirmed=function(){
                return false;
            }
        $scope.storeSeat = function() {
            $scope.isConfirmed=function(){
                return true;
            }
            $scope.selection = [];
            for (var row = 0; row < $scope.seats.length; row++) {
                for (var col = 0; col < $scope.seats[row].length; col++) {
                    if ($scope.seats[row][col].check) {
                        $scope.selection.push($scope.seats[row][col].seat_no);
                        $scope.seats[row][col].free = false;
                        $scope.seats[row][col].check = false;
                    }
                }
            }
            $scope.nrSeats=$scope.selection.length;
         var data=
                {
                movieId:$scope.movieId,
                date: $scope.bookMovie.date,
                time:$scope.bookMovie.time,
                seatsBooked: $scope.selection.join(','),
                userId:$rootScope.userId
                }
            
            $http
            .post('http://localhost:3000/bookingUser',data)
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
           /*  alert("Your seats are : " + $scope.selection.join(', '))
            $location.path("/movies"); */
        }
    }
]);