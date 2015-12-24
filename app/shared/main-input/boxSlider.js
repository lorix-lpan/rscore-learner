app.directive('boxSlider', function () {
  return {
    restrict: 'E',
    scope: {
      type: '='
    },
    templateUrl: 'app/shared/main-input/box-slider.html'
  };
});
