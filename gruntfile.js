module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/app.min.js':
            [
              // libs
              /* 'assets/libs/angular/angular.min.js',
              'assets/libs/angular-aria/angular-aria.min.js',
              'assets/libs/angular-messages/angular-messages.min.js',
              'assets/libs/angular-animate/angular-animate.min.js',
              'assets/libs/angular-material/angular-material.min.js',
              'assets/libs/angular-route/angular-route.min.js',
              */
              'app/app.js',
              'app/config/route.js',
              'app/config/translate.js',
              'app/services/languageService.js',
              'app/services/tabService.js',
              'app/shared/translation/animateTrans.js',
              'app/shared/translation/ch-lang/chLang.js',
              'app/shared/navigation/text-title/textTitle.js',
              'app/shared/navigation/nav-title/navTitle.js',
              'app/shared/navigation/side-nav/sideNav.js',
              'app/shared/navigation/nav-list/navList.js',
              'app/shared/navigation/content-bar/contentBar.js',
              'app/components/calculator/main-input/boxSlider.js',
              'app/components/calculator/dynamics-tabs/dynamicsTabs.js',
              'app/components/calculator/calc-rscore/calcRscore.js',
              'app/components/calculator/calcController.js'
            ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ["uglify"]);
};
