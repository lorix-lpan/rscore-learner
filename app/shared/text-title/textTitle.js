app.directive('textTitle', ['languageService', function (language) {
  var trans = {
    en: {
      TITLE: 'Get Your R Score',
      SECTITLE: 'A Better and Smarter R Score Calculator'
    },
    fr: {
      TITLE: 'Obtenez votre cote R',
      SECTITLE: 'Une Calculatrice pour la Cote R Mieux et Plus Intelligemment'
    }
  };

  var link = function (scope) {
    var update = function () {
      scope.title = trans[language.lang.toString()].TITLE;
      scope.secTitle = trans[language.lang.toString()].SECTITLE;
    };
    //assign text according to language.lang
    update();
    // watch changes of language.lang
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
