'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope',function ($scope) {
  $scope.services=[
    { title: 'HTML5 development', price: 200},
    { title: 'Android development', price: 250},
    { title: 'iOS development', price: 190},
    { title: 'Green Tea', price: 20}];

    $scope.total = function() {
      var t = 0;
        angular.forEach($scope.services, function(s){
            if(s.selected)
                t+=s.price;
        });
        return t;
    }
  }
]);