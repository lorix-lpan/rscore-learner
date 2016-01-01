app.directive('dynamicsTabs', ['languageService', function (language) {
  var controller = ['$scope', '$rootScope', '$mdDialog', 'tabService', 
  function ($scope, $rootScope, $mdDialog, defaultTab) {
    // translation framework
    var trans = language.trans.dynamicsTabs;
    var update = function () {
      $scope.OVERALL = trans[language.lang.toString()].OVERALL;
    };
    update();
    $scope.$watch(function () {
      return language.lang;
    }, function () {
      update();
    });
    // list of tabs
    var tabs = [ { title: 'Untitled'.toUpperCase(), credits: 2.66 } ];

    $scope.overallScore = function () {
      var scores = 0;
      var credits = 0;
      for (var i = 0; i < tabs.length; i++) {
        scores += tabs[i].credits * tabs[i].score;
        credits += parseFloat(tabs[i].credits);
      }
      return scores / credits;
    };

    var editDialog = function (tab, type) {
      // type: new or modify
      tab.type = type;
      // set default tab properties
      $rootScope.tab = tab;
      // update tab according to event
      var offFn1 = $scope.$on('newTitle', function (event, mass) {
        tabs[tabs.indexOf(tab)].title = mass;
      });
      var offFn2 = $scope.$on('newCredits', function (event, mass) {
        tabs[tabs.indexOf(tab)].credits = mass;
      });
      $rootScope.$watch('isClosed', function (newVal) {
        if (newVal)
          offFn1();
          offFn2();
      });
    };
    $scope.tabs = tabs;
    $scope.addTab = function (ev) {
      var tab = angular.copy(defaultTab);
      tabs.push(tab);
      $scope.showDialog(ev);
      editDialog(tab, 'new');
    };
    $scope.modifyTab = function (tab, ev) {
      $scope.showDialog(ev);
      editDialog(tab, 'edit');
    };

    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
    $scope.showDialog = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'app/components/calculator/dynamics-tabs/add-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };

    var DialogController = ['$scope', '$rootScope', '$mdDialog', 'tabService', 
    function ($scope, $rootScope, $mdDialogm, defaultTab) {
      // translation framework
      var trans = language.trans.dialog;
      var update = function () {
        $scope.COURSE = trans[language.lang.toString()].COURSE;
        $scope.CREDITS = trans[language.lang.toString()].CREDITS;
        $scope.CREATE = trans[language.lang.toString()].CREATE;
        $scope.MODIFY = trans[language.lang.toString()].MODIFY;
        $scope.REQUIRE = trans[language.lang.toString()].REQUIRE;
        $scope.INVALID = trans[language.lang.toString()].INVALID;
      };
      update();
      $scope.$watch(function () {
        return language.lang;
      }, function () {
        update();
      });
      // if close unregister listeners
      $rootScope.isClosed = false;
      $scope.tab = $rootScope.tab;
      if ($scope.tab.type === 'new') {
        $scope.NEW_EDIT = $scope.CREATE.toUpperCase();
      } 
      if ($scope.tab.type === 'edit') {
        $scope.NEW_EDIT = $scope.MODIFY.toUpperCase();
      }
      $scope.$watch('tab.title', function (newVal) {
        $rootScope.$broadcast('newTitle', newVal);
      });
      $scope.$watch('tab.credits', function (newVal) {
        $rootScope.$broadcast('newCredits', newVal);
      });
      $scope.hide = function() {
        // remove event listeners when it is closed
        $rootScope.isClosed = true;
        $mdDialog.hide();
      };
    }];
  }];

  return {
    restrict: 'E',
    templateUrl: 'app/components/calculator/dynamics-tabs/dynamics-tabs.html',
    controller: controller
  };
}]);
