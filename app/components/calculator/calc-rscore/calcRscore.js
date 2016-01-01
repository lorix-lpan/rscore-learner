app.directive('calcRscore', function () {
  var controller = ['$scope', 'languageService', function ($scope,  language) {
    var trans = language.trans.calculator;
    var lang = language.lang;
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
      return !rscore ? "Error" : rscore;
    };

    $scope.grade = new BoxInput(
      trans[lang].GRADE,
      75,
      {floor: 0, ceil: 100}
    );

    $scope.stdev = new BoxInput(
      trans[lang].STDEV,
      10,
      {floor: 0, ceil: 100}
    );

    $scope.average = new BoxInput(
      trans[lang].AVR,
      75,
      {floor: 0, ceil: 100}
    );

    $scope.haverage = new BoxInput(
      trans[lang].HAVR,
      75,
      {floor: 0, ceil: 100}
    );

    $scope.rscoreText = trans.en.RSCORE;

    $scope.rscore = function () {
      return $scope.rcalc($scope.grade.value,
                   $scope.stdev.value,
                   $scope.average.value,
                   $scope.haverage.value
                  );
    };

    $scope.$watch('rscore()', function (newVal) {
      $scope.score = newVal;
    });

    $scope.$watch(function () {
      return language.lang;
    }, function () {
      var lang = language.lang.toString();
      $scope.grade.name = trans[lang].GRADE;
      $scope.stdev.name = trans[lang].STDEV;
      $scope.average.name = trans[lang].AVR;
      $scope.haverage.name = trans[lang].HAVR;
      $scope.rscoreText = trans[lang].RSCORE;
    });
  }];

  return {
    restrict: 'E',
    templateUrl: 'app/components/calculator/calc-rscore/calc-rscore.html',
    scope: {
      score: '='
    },
    controller: controller
  };
});
