var studentListApp = angular.module('studentListApp', []);

studentListApp.controller('StudentListCtrl', function ($scope) {
  $scope.students = [
    {
      name: 'Michael Choi',
      hobby: 'Restauranteur'
    },
    {
      name: 'Rocky Nicholson',
      hobby: 'Keeping America Safe...'
    },
    {
      name: 'William Spies',
      hobby: 'Running like crazy....'
    }
  ]
  $scope.addNew = function(name, hobby) {
    $scope.students.push({
      name: name,
      hobby: hobby
    });
  };
});

studentListApp.controller('SportsCtrl', function ($scope) {
  $scope.sports = [
    {
      name: 'Basketball',
      location: 'Indoor',
      numberOfPlayers: '5 per team'
    },
    {
      name: 'Baseball',
      location: 'Outdoor',
      numberOfPlayers: 'Who knows its so boring...'
    },
    {
      name: 'Base Jumping',
      location: 'Outdoor',
      numberOfPlayers: '1, until they screw up and hurt themselves, then 0'
    }
  ]
  $scope.addNew = function(name, location, numberOfPlayers) {
    $scope.sports.push({
      name: name,
      location: location,
      numberOfPlayers: numberOfPlayers
    });
  };
});