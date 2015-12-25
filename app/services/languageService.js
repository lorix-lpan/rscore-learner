app.factory('languageService', ['$http', 

function ($http) {
  var language = {};
  // lang will be either 'en' or 'fr'
  // Default lang = 'en'
  language.lang = 'en';
  // set language
  language.setLang = function (lang) {
    this.lang = lang;
  };
  // get /translate.json
  $http.get('./translate.json').
    then(function (data) {
      language.trans = data;
    });
  return language;
}]);
