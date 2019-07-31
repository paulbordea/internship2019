var demo = angular.module("demo", []);

demo.controller("Ctrl",

function Ctrl($scope) {
    $scope.model = {
        movies: [{
            id: 1,
            title: "Ben",
            date: "7/10/2019",
            time: "12:00-14:00",
            room: "room 2",
            actors: "John Snow, Emilia Clarke",
            year: "2018",
            description: "A fascinating story about a little boy who is going to cnjhnbhjfdnjjfjfjjdjdjghjdhhgjd"

        }, {
            id: 2,
            title: "Ben",
            date: "7/10/2019",
            time: "12:00-14:00",
            room: "room 2",
            actors: "John Snow, Emilia Clarke",
            year: "2018",
            description: "A fascinating story about a little boy who is going to cnjhnbhjfdnjjfjfjjdjdjghjdhhgjd"
        }, {
            id: 3,
            title: "Ben",
            date: "7/10/2019",
            time: "12:00-14:00",
            room: "room 2",
            actors: "John Snow, Emilia Clarke",
            year: "2018",
            description: "A fascinating story about a little boy who is going to cnjhnbhjfdnjjfjfjjdjdjghjdhhgjd"
        }, {
            id: 4,
            title: "Ben",
            date: "7/10/2019",
            time: "12:00-14:00",
            room: "room 2",
            actors: "John Snow, Emilia Clarke",
            year: "2018",
            description: "A fascinating story about a little boy who is going to cnjhnbhjfdnjjfjfjjdjdjghjdhhgjd"
        }],
        selected: {}
    };
    $scope.addEmployee = function () {
	//Add the new item to the Array.
	var movie = {
		id: $scope.model.movies.length+1,
		title : $scope.title,
		date : $scope.date,
        time: $scope.time,
        room: $scope.room,
        actors: $scope.actors,
        year: $scope.year,
        description: $scope.description
    };
  
    $scope.model.movies.push(movie);
    console.log($scope.model.movies.length);
    console.log($scope.model.movies);
   $scope.reset();
}
    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (contact) {
        if (contact.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (contact) {
        $scope.model.selected = angular.copy(contact);
    };

    $scope.saveContact = function (idx) {
        console.log("Saving contact");
        $scope.model.movies[idx] = angular.copy($scope.model.selected);
        $scope.reset();
    };
    $scope.deleteContact= function (i) {
       $scope.model.movies.splice(i, 1);
       console.log("S a sters contactul"+ i);
     
   };
 

  
    $scope.reset = function () {
        $scope.model.selected = {};
    };
});