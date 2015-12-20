app.controller('calcController', ['$scope', function ($scope) {
  $scope.grade = {
    value: 80,
    options: {
      floor: 0,
      ceil: 100
    }
  };
}]);
