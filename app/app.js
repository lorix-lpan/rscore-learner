var app = angular.module('rscoreCalc', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      redirectTo: '/calculator'
    }).
    when('/calculator', {
      templateUrl: 'app/components/calculator/calculator.html',
      controller: 'calcController'
    }).
    when('/overall', {
      controller: 'overallController'
    }).
    when('/about', {
      templateUrl: 'app/components/about/about.html',
      controller: 'aboutController'
    }).
    otherwise({
      redirectTo: '/calculator'
    });
}]);
