app.directive('boxSlider', function () {
  return {
    restrict: 'E',
    scope: {
      type: '='
    },
    templateUrl: 'app/shared/mainInput/box-slider.html'
  };
});
