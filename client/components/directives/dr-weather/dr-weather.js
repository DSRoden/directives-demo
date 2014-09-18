(function(){
  'use strict';

  angular.module('drWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function weather(query){
      return $http.jsonp('http://api.wunderground.com/api/66488bb7d2153c7a/conditions/q/'+ query + '.json?callback=JSON_CALLBACK');
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
      $scope.$on('position', function(event, pos){
        if($scope.zip){return;}
        console.log('i am the weather', pos);
        var query = pos.coords.latitude + ',' + pos.coords.longitude;
        console.log(query);
        getWeather(query);

      });
      function getWeather(query){
        WeatherApi.weather(query).then(function(response){
          $scope.conditions = response.data;
        });
      }
      if($scope.zip) {getWeather($scope.zip);}
    }];
    return o;
  }]);
})();
