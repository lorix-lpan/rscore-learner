app.directive('boxSlider', ['languageService', '$timeout', function (language, $timeout) {
  var link = function (scope, element, attrs) {
    var nodeList = angular.element(element.find('span'));
    var tags = [];
    // convert nodelist to list
    language.toList(nodeList, tags);
    // add rscore to the list ready to be animated
    tags.push(angular.element(document.querySelector('#rscore')));
    scope.$watch(function () {
      return language.buttonClicked;
    }, function () {
      // language.animate(tags, 'animated fadeIn', 'animated fadeOut', 800);
      // when button clicked is true, animate the text
      if (language.buttonClicked === true) {
        language.animate(tags, 'animated fadeIn', 'animated fadeOut', 800);
      }
    });
  };

  return {
    restrict: 'E',
    scope: {
      type: '='
    },
    templateUrl: 'app/shared/main-input/box-slider.html',
    link: link
  };
}]);
