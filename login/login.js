'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl',
    resolve : {
          "check":function($rootScope,$location){   //function to be resolved, accessFac and $location Injected
          if($rootScope.isLoggedIn){    //check if the user has permission -- This happens before the page loads
              
          }else{
          $location.path('/login');                //redirect user to home if it does not have permission.
            
          }
      }

    }
  });
}])

.controller('LoginCtrl', ['$scope','$rootScope', '$location',function($scope, $rootScope, $location) {
  $rootScope.isLoggedIn = false;
    $scope.onSubmit = function() {
      console.log('uwixuw');
      if($scope.username != '') {
        $rootScope.isLoggedIn = true;
        $location.path( "/home" );
      }
    }
}]);