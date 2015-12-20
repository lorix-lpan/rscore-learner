app.controller('calcController', ['$scope', function ($scope) {
  function BoxInput(name, value, options) {
    this.name = name;
    this.value = value;
    this.options = options;
  }

  $scope.grade = new BoxInput(
    'Your Grade: ',
    75,
    {floor: 0, ceil: 100}
  );
  
  $scope.stdev = new BoxInput(
    'Class Standard Deviation: ',
    10,
    {floor: 0, ceil: 100}
  );

  $scope.average = new BoxInput(
    'Class Average: ',
    75,
    {floor: 0, ceil: 100}
  );

  $scope.strength = new BoxInput(
    'Group Strenth: ',
    75,
    {floor: 0, ceil: 100}
  );
}]);
