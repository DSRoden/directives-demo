(function(){
  'use strict';

  angular.module('directives-demo')
  .factory('Movie', ['$http', function($http){

    function create(title){
      return $http.post('/movies', {title:title});
    }

    function remove(title){
      return $http.post('/delmovies', {title:title});
    }

    return {create:create, remove:remove};
  }]);
})();

