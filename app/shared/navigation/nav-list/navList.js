app.directive('navList', ['languageService', function (language) {
  var controller = ['$scope', '$location', function ($scope, $location) {
    var update = function () {
      var lang = language.lang.toString();
      $scope.CALC = trans[lang].CALC;
      $scope.ABOUT = trans[lang].ABOUT;
      $scope.ESTIMATE = trans[lang].ESTIMATE;
      $scope.SUBMIT = trans[lang].SUBMIT;
    };
    var trans = language.trans.navList;
    update();
    var navList = [
      {
        desti: '/calculator',
        icon: 'assets/img/calculator.svg',
        label: function () { return $scope.CALC; }
      },
      {
        desti: '/about',
        icon: 'assets/img/book-open-variant.svg',
        label: function () { return $scope.ABOUT; }
      },
      {
        desti: '/about',
        icon: 'assets/img/help-circle.svg',
        label: function () { return $scope.ESTIMATE; }
      },
      {
        desti: '/about',
        icon: 'assets/img/cloud-check.svg',
        label: function () { return $scope.SUBMIT; }
      }
    ];
    $scope.navList = navList;
    $scope.navigateTo = function (path) {
      $location.path(path);
    };
    $scope.$watch(function () {
      return language.lang;
    }, function () {
      update();
    });
  }];
  return {
    restrict: 'E',
    templateUrl: 'app/shared/navigation/nav-list/nav-list.html',
    controller: controller
  };
}]);
