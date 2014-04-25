/*global module:true*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    lint: {
      files: ['Gruntfile.js', '*.js']
    },

    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'stylesheets',
          src: ['*.scss'],
          dest: 'stylesheets',
          ext: '.css'
        }]
      }
    }
  });

  // Default task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['lint', 'sass']);

  };