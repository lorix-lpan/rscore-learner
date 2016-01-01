app.directive('navTitle', ['languageService', function (language) {

  var link = function (scope, element, attrs) {
    var lala = language.trans.titles;
    var update = function () {
      scope.sectitle = lala[language.lang.toString()].SECTITLE;
    };
    //assign text according to language.lang
    update();
    scope.$watch(function () {
      return language.lang;
    }, function () {
      update();
    });
  };
  return {
    restrict: 'E',
    templateUrl: 'app/shared/navigation/nav-title/nav-title.html',
    link: link
  };
}]);
