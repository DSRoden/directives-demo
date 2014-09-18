(function(){
  'use strict';

  angular.module('drWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function weather(zip){
      return $http.jsonp('http://api.wunderground.com/api/66488bb7d2153c7a/conditions/q/'+ zip + '.json?callback=JSON_CALLBACK');
    }

    return {weather:weather};
  }])
  .directive('drWeather', ['$interval', function($interval){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/dr-weather/dr-weather.html';
    o.scope = {zip:'@'};
    o.link = function(scope, element, attrs){
      element.on('$destroy', function(){
      });
    };

    o.controller = ['$scope', 'WeatherApi', function($scope, WeatherApi){
      function getWeather(){
        WeatherApi.weather($scope.zip).then(function(response){
          $scope.conditions = response.data;
        });
      }
      getWeather();
    }];
    return o;
  }]);
})();
