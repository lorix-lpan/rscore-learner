app.directive('boxSlider', ['languageService', '$timeout', function (language, $timeout) {

  return {
    restrict: 'E',
    scope: {
      type: '='
    },
    templateUrl: 'app/components/calculator/main-input/box-slider.html'
  };
}]);
