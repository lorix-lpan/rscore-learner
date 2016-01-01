app.directive('textTitle', ['languageService', function (language) {

  var link = function (scope, element, attrs) {
    var lala = language.trans.titles;
    var update = function () {
      scope.title = lala[language.lang.toString()].TITLE;
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
    templateUrl: 'app/shared/navigation/text-title/text-title.html',
    link: link
  };
}]);
