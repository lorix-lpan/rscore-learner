app.directive('chLang', ['languageService', function (language) {
  var link = function (scope, element, attrs) {
    var en = angular.element(element.find('span')[0]);
    var fr = angular.element(element.find('span')[1]);
    en.addClass('ch-active');
    fr.addClass('ch-still');
    scope.setLang = function (lang) {
      // no effect if active button is clicked
      if (language.lang === lang) {
        return;
      } else {
        language.lang = lang;
      }
      if (language.lang === 'en') {
        en.removeClass('ch-still');
        fr.removeClass('ch-active');
        en.addClass('ch-active');
        fr.addClass('ch-still');
      } else {
        en.removeClass('ch-active');
        fr.removeClass('ch-still');
        en.addClass('ch-still');
        fr.addClass('ch-active');
      }
    };
  };
  return {
    restrict: 'E',
    templateUrl: 'app/shared/ch-lang/ch-lang.html',
    link: link
  };
}]);
