app.factory('tabService', function () {
  var tab = {};
  // default properties
  tab.title = 'untitled'.toUpperCase();
  tab.credits = 2;
  return tab;
});
