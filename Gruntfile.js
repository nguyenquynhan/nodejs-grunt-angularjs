const path = require('path');
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    cssmin: {  
        min: {
            files: [
                {
                    expand: true,
                    cwd: "css/",
                    src: ["*.css", "!*.min.css"],
                    dest: "css/",
                    ext: ".min.css"
                }
            ]
        },      
        dev: {  
            options: {                
                sourceMap: true
            },                     
            files:{
                'public/bundle/style.css': [ "css/*.css", '!css/*.min.css']
            }
        },      
        prod: {                                            
            files:{
                'public/bundle/style.css': [ "css/*.css", '!css/*.min.css']
            }
        }
    },
    uglify: {
        dev: {
            options: {                
                sourceMap: true,
                sourceMapName: 'public/bundle/sourcemap.map',
                compress: true
            },
            files: {
                'public/bundle/script.js': [
                    'js/angular.js',
                    'js/angular-route.js',
                    'js/app.js',
                    'js/bundle.template.js',
                ]
            }
        },
        prod: {            
            files: {
                'public/bundle/script.js': ['js/bundle.concat.js']
            }
        }
      },
    ngtemplates:    {
        dev: {
            files: {
                'js/bundle.template.js': ['views/*.html']
            },
            options:    {
                module: 'scotchApp',
                sourceMap: true,
                htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
            }
        },
        dev: {
            files: {
                'js/bundle.template.js': ['views/*.html']
            },
            options:    {
                module: 'scotchApp',
                sourceMap: false,
                htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
            }
        }
    },
    concat: {
        options: {
            separator: ';'
        },
        dev: {
            src: [
                'js/angular.js',
                'js/angular-route.js',
                'js/app.js'
            ],
            dest: 'js/bundle.concat.js'
        }
    },
    watch: {
        scripts: {
            files: ['./js/*', './views/*', './css/*'],
            tasks: ['default'],
            options: {
              spawn: false
            }
        }
    },
    imagemin: {                          // Task        
        dynamic: {                         // Another target
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'img/',                   // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'public/bundle/img/'                  // Destination path prefix
          }]
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  
  grunt.registerTask('default', ['cssmin:dev','ngtemplates:dev', 'uglify:dev' ]);
  grunt.registerTask('prod', ['cssmin:prod','ngtemplates:prod', 'uglify:prod']);

  grunt.registerTask('server', 'Start a custom web server', function() {        
        require('./bin/www')        
  });

  grunt.registerTask('start', ['default','server', 'watch' ]);

};