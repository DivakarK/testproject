'use strict';

angular.module('myApp.help', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/help', {
    templateUrl: 'help/help.html',
    controller: 'HelpCtr',
    resolve : {
          "check":function($rootScope,$location){   //function to be resolved, accessFac and $location Injected
          if($rootScope.isLoggedIn){    //check if the user has permission -- This happens before the page loads
              
          }else{
          $location.path('/login');                //redirect user to home if it does not have permission.
            //alert("You don't have access here");
          }
      }

    }
  });
}])

.controller('HelpCtr', ['$scope',function ($scope) {
    
}]);