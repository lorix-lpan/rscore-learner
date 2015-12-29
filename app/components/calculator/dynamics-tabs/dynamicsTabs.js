app.directive('dynamicsTabs', function () {
  var controller = ['$scope', '$log', function ($scope, $log) {
    var tabs = [
          { title: 'Rename Me', content: "Tabs will become paginated if there isn't enough room for them."},
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  }];
  return {
    restrict: 'E',
    templateUrl: 'app/components/calculator/dynamics-tabs/dynamics-tabs.html',
    controller: controller
  };
});
