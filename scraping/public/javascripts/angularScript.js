var app = angular.module('theScraper', []);

app.factory('data', ['$http', function($http){
var o = {posts:[]
};

return o;
}]);

app.controller('MainCtrl', ['$scope', 'data',function($scope, data){
  $scope.test = 'Hello world!'; 
  
}]);	