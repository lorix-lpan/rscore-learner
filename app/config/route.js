app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/calculator', {
      templateUrl: 'app/components/calculator/calcView.html',
      controller: 'calcController'
    }).
    when('/about', {
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'aboutController'
    }).
    otherwise({
      redirectTo: '/calculator'
    });
  $locationProvider.html5Mode(true);
}]);
