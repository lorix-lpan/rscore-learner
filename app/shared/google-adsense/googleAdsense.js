app.directive('googleAdsense', function () {
  return {
    restrict: 'E',
    controller: function () {
      (adsbygoogle = window.adsbygoogle || []).push({});
    },
    templateUrl: 'app/shared/google-adsense/google-adsense.html'
  };
});
