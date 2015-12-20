var app = angular.module('rscoreCalc', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'homeController'
    }).
    when('/overall', {
      templateUrl: 'app/views/overall.html',
      controller: 'overallController'
    }).
    when('/about', {
      templateUrl: 'app/views/about.html',
      controller: 'aboutController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
