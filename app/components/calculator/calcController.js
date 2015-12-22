app.controller('calcController', ['$scope', function ($scope) {
  function BoxInput(name, value, options) {
    this.name = name;
    this.value = value;
    this.options = options;
  }

  $scope.rcalc = function (grade, stdev, avr, havr) {
    if (grade > 100 || stdev > 100 || avr > 100 || havr > 100)
      return "Error";

    var zscore = (grade - avr) / stdev;
    var gstr = (havr - 75) / 14;
    var rscore = (zscore + gstr + 5) * 5; 
    return !rscore ? "Error" : Math.floor(rscore*100)/100;
  };

  $scope.grade = new BoxInput(
    'Your Grade',
    75,
    {floor: 0, ceil: 100}
  );
  
  $scope.stdev = new BoxInput(
    'Standard Deviation',
    10,
    {floor: 0, ceil: 100}
  );

  $scope.average = new BoxInput(
    'Class Average',
    75,
    {floor: 0, ceil: 100}
  );

  $scope.haverage = new BoxInput(
    'High School Average',
    75,
    {floor: 0, ceil: 100}
  );

  $scope.rscore = function () {
    return $scope.rcalc($scope.grade.value, 
                 $scope.stdev.value, 
                 $scope.average.value, 
                 $scope.haverage.value
                );
  };
}]);
