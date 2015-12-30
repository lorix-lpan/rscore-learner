app.directive('navList', ['languageService', function (language) {
  var link = function (scope) {
    var update = function () {
      var lang = language.lang.toString();
      scope.CALC = trans[lang].CALC;
      scope.ABOUT = trans[lang].ABOUT;
      scope.ESTIMATE = trans[lang].ESTIMATE;
      scope.SUBMIT = trans[lang].SUBMIT;
    };
    var trans = language.trans.navList;
    update();
    scope.$watch(function () {
      return language.lang;
    }, function () {
      update();
    });
  };
  return {
    restrict: 'E',
    templateUrl: 'app/shared/nav-list/nav-list.html',
    link: link
  };
}]);
