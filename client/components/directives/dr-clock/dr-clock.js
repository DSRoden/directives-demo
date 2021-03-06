(function(){
  'use strict';

  angular.module('drClockModule', [])
  .directive('drClock', ['$interval', function($interval){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/dr-clock/dr-clock.html';
    o.scope = {frequency: '@'};
    o.link = function(scope,element, attrs){
      function updateTime(){
        scope.date = new Date();
      }

      var id = $interval(updateTime, scope.frequency * 1);
      $interval.cancel(id);

      element.on('$destroy', function(){
        $interval.cancel(id);
      });

      updateTime();
    };



    return o;
  }]);
})();
