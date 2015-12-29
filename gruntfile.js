module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/app.min.js': 
            [
              // libs
              'assets/libs/angular/angular.js',
              'assets/libs/angular-route/angular-route.js',
              'assets/libs/angularjs-slider/dist/rzslider.js',
              // angular files
              'app/app.js', 
              'app/config/route.js',
              'app/config/translate.js',
              'app/services/languageService.js',
              'app/components/calculator/calcController.js', 
              'app/shared/animateTrans.js',
              'app/shared/ch-lang/chLang.js',
              'app/shared/text-title/textTitle.js',
              'app/shared/main-input/boxSlider.js'
            ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ["uglify"]);
};
