app.directive('textTitle', ['languageService', function (language) {

  var link = function (scope, element, attrs) {
    var lala = language.getData().data.titles;
    var update = function () {
      scope.title = lala[language.lang.toString()].TITLE;
      scope.secTitle = lala[language.lang.toString()].SECTITLE;
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
    templateUrl: 'app/shared/text-title/text-title.html',
    link: link
  };
}]);
