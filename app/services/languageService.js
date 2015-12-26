app.factory('languageService', ['$http', '$timeout',

function ($http, $timeout) {
  var language = {};
  // lang will be either 'en' or 'fr'
  // Default lang = 'en'
  language.lang = 'en';
  // if set language button(s) is clicked
  language.buttonClicked = false;
  // assign data of translate.json to language.trans.data
  $http.get('./translate.json').then(function (data) {
    language.data =  data;
  });
  // get data, ensure data is loaded
  language.getData = function () {
    while (!language.data) {
      console.log("loading");
    }
    return language.data;
  };
  // set language
  language.setLang = function (lang) {
    this.lang = lang;
  };
  // alternate state of the switcher button
  // lang => string
  // btn => jqlite object
  // new value
  language.altButton = function (lang, btn1, btn2, newLang, activeClass, stillClass) {
    if (newLang === lang) {
      btn1.removeClass(stillClass);
      btn1.addClass(activeClass);
      btn2.removeClass(activeClass);
      btn2.addClass(stillClass);
    } else {
      btn1.removeClass(activeClass);
      btn1.addClass(stillClass);
      btn2.removeClass(stillClass);
      btn2.addClass(activeClass);
    }
  };
  // In & out animation when switching languages
  // elements is a NodeList of elements wished to be animated
  // classIn and classOut are lists of classes in strings
  // callback is the action before elements are faded in
  language.animate = function (elements, classIn, classOut, time, callback) {
    // add out classes
    elements.forEach(function (element) {
      element.addClass(classOut);
    });
    language.buttonClicked = true;
    $timeout(function () {
      if (typeof callback === 'function')
        callback();
      elements.forEach(function (element) {
        element.removeClass(classOut);
        element.addClass(classIn);
      });
      language.buttonClicked = false;
    }, time);
  };
  // helpers
  // nodelist from querySelectorAll to list of dom objects
  language.toList = function (nodeList) {
    var list = [];
    for (var i = 0; i < nodeList.length; i++) {
      list.push(angular.element(nodeList[i]));
    }
    return list;
  };
  return language;
}]);
