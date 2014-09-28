(function(){
  'use strict';

  angular.module('drWikiSherpaModule', [])
  .factory('TravelApi', ['$http', function($http){
    function travel(city){
      return $http.jsonp('http://www.wikisherpa.com/api/1/page/en/' + city + '.json?callback=JSON_CALLBACK');
    }

    return {travel:travel};
  }])
  .directive('drTravel', ['$interval', function($interval){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/dr-travel/dr-travel.html';
    o.scope = {city:'@'};
    o.link = function(scope, element, attrs){
      element.on('$destroy', function(){
      });
    };

    o.controller = ['$scope', 'TravelApi', function($scope, TravelApi){
                    TravelApi.travel($scope.city).then(function(response){
                    debugger;
                    $scope.info = response.data;
                   });
                }];
    return o;
  }]);
})();
