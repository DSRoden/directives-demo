(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', 'Movie', function($scope, Movie){
    $scope.people = [{name:'Bob', age:25}, {name:'Sue', age:40}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN'];
    $scope.titles = [];


    $scope.addMovie = function(){
      Movie.create($scope.title).then(function(response){
        console.log(response);
        $scope.titles.push(response.data.movie.title);
        $scope.title = null;
      });
    };

    $scope.delMovie = function(index, title){
      Movie.remove(title).then(function(response){
      $scope.titles.splice(index, 1);
      });
    };
  }]);
})();

