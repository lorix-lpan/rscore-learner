app.directive('boxSlider', ['languageService', '$timeout', function (language, $timeout) {
  var link = function (scope) {
    type.value < 60 ? scope.sliderClass = 'md-warning' : scope.sliderClass = 'md-primary';
  };

  return {
    restrict: 'E',
    scope: {
      type: '='
    },
    templateUrl: 'app/components/calculator/main-input/box-slider.html'
  };
}]);
