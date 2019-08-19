app.controller('bookingController', ['$scope', '$http','$routeParams', '$log','$location',
    function ($scope, $http, $routeParams, $log,$location) {

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
        $http.get("http://localhost:3000/seats1")
            .then((response) => {
                $scope.seats1 = response.data;
            })
            .catch((error) => {
                console.log("Error fetching seats" + error.data)
            })
         $scope.select = function (seat) {
            if (seat.check === true) {
                seat.check = false;
            }
            else {
                seat.check = true;
            }
        }
        $scope.storeSeat = function () {
            $scope.selection = [];
            for (var row = 0; row < $scope.seats1.length; row++) {
                for (var col = 0; col < $scope.seats1[row].length; col++) {
                    if ($scope.seats1[row][col].check) {
                        $scope.selection.push($scope.seats1[row][col].seat_no);
                        $scope.seats1[row][col].free = false;
                        $scope.seats1[row][col].check = false;
                    }
                }
            }
            alert("Your seats are : " + $scope.selection.join(', '))
            $location.path("/movies");
        }
    }]);