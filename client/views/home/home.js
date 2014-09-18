(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.people = [{name:'Bob', age:25}, {name:'Sue', age:40}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN'];
  }]);
})();

