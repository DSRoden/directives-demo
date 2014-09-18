(function(){
  'use strict';

  angular.module('drGreetingModule', [])
  .directive('drGreeting', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/dr-greeting/dr-greeting.html';
    o.scope       = {name: '@', age: '@'};


    return o;
  }]);
})();
