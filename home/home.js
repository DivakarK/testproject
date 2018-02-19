'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtr',
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

.controller('HomeCtr', ['$scope', 'Items', function($scope, Items) {
  $scope.items = Items.query();
}])

.factory('Items', function() {
  var items = {};
  items.query = function() {
    // In real apps, pull this data from the server...
    return [
      { name: "Ram", age: 25, id: 1 },
      { name: "Ajay", age: 35, id: 2 },
      { name: "Vivek", age: 22, id: 3 }
    ];
  };
  return items;
});