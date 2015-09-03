'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    elmFiles: ['app/elm/*.elm'],
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'app/angular/**/*.js'],
      options: {
        jshintrc: './.jshintrc'
      },
    },
    watch: {
      bower: {
        files: ['bower_components/*'],
        tasks: ['wiredep']
      },
      html: {
        files: ['index.html', 'app/partials/*.html'],
        tasks: [],
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],        
        options: {
          spawn: false,
        },
      },
      elm: {
        files: ['<%= elmFiles %>'],
        tasks: ['elm'],        
      },
      options: {
        livereload: true,
      },
    },
    elm: {
      compile: {
        files: {
          'elm.js': ['<%= elmFiles %>']
        }
      },
    },
    wiredep: {
      task: {
        src: [
          'index.html',
        ],
        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    },
    ngsrc: {
        target: {
            src: ['app/angular/**/*.js'],
            dest: ['tmp/index.html']
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  // TODO: hacer andar la inclusion automatica copiando el template de index a una carpeta dist
  // grunt.loadNpmTasks('grunt-ngsrc');

  // TODO: hacer andar la conversion de anotaciones para DI
  // grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.loadNpmTasks('grunt-elm');

  grunt.registerTask('default', ['jshint', 'elm', 'wiredep', 'watch']);
};
