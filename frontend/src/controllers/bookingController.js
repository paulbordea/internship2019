app.controller('bookingController', ['$scope', '$http', '$routeParams', '$log',
    function($scope, $http, $routeParams, $log) {
        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }
    
        var init = function() {

            $scope.movieId = $routeParams.movieId;
           

            $http.get("http://localhost:3000/seats1")
                .then((response) => {
                    $scope.seats1 = response.data;
                    
                     $scope.select=function(seat){

                         if(seat.check===true){
                             seat.check=false;
                         }
                         else{
                             seat.check=true;
                         }
                     }
                     $scope.storeSeat=function(){
                        $scope.selection=[];
                        for (var row = 0; row < $scope.seats1.length; row++) {
                            for (var col = 0; col <$scope.seats1[row].length; col++) {
                                if ($scope.seats1[row][col].check) {
                                    $scope.selection.push($scope.seats1[row][col].seat_no);
                                    $scope.seats1[row][col].free = false;
                                    $scope.seats1[row][col].check = false;
                                }
 
                                
                            }
                        }
                        $http.put(`http://localhost:3000/seats1`,$scope.seats1,config)
                                .then((response)=>{
                                    console.log(response.data);
                                })
                             .catch((error) => {
                                    $log.log("Error fetching seats: " + JSON.stringify(error));
                                });
                        
                        
                     }
                    
                })
                .catch((error) => {
                    $log.log("Error fetching seats: " + JSON.stringify(error));
                });
        }
    init();
     }
]);