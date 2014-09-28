(function(){
  'use strict';

  angular.module('directives-demo')
  .factory('Home', ['$http', function($http){

    function travel(city){
      return $http.post('/city', {city: city});
    }

    return {travel:travel};
  }]);
})();

