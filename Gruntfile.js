module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);



    grunt.initConfig({


        files_js: {
            all:[
                'bower_components/jquery/jquery.js',
                'bower_components/pikaday/pikaday.js',
                'assets/js/widgets/init.js',
                'assets/js/widgets/a-ajax.js',
                'assets/js/widgets/a-modal.js',
                'assets/js/index.js'

            ]
        },

        files_css: {
            all:[
                //'bower_components/teste.css',
                'assets/css/index.css'
            ]
        },

        pkg: grunt.file.readJSON('package.json'),

         uglify: {
            dev: {
                options: {
                   beautify: true
                },
                files: {
                    'assets/js/index-min.js': [
                        '<%= files_js.all %>'
                    ]
                }
            },

            prod: {
                options: {

                },
                files: {
                    'assets/js/index.min.js': [
                        '<%= files_js.all %>'
                    ]
                }
            }
        },


        less: {
          dev: {
            options: {
              paths: ["assets/css"],

              cleancss: true
            },
            files: {
              "assets/css/index.css": "assets/less/index.less"
            }
          },

          prod: {
            options: {
              paths: ["assets/css"],
              compress: true,
              cleancss: true,
            },
            files: {
             "assets/css/index.css": "assets/less/index.less"
            }
          }
        },

        sass: {
          dev: {
            options: {
              style: 'expanded',
              loadPath: require('node-bourbon').includePaths,
               loadPath: require('node-neat').includePaths
            },
            files: {
              "assets/css/index.css": "assets/scss/index.scss"
            }
          },

          /*prod: {
            options: {
              style: 'expanded',
              loadPath: require('node-bourbon').includePaths,
              loadPath: require('node-neat').includePaths
            },
            files: {
             "assets/css/index.css": "assets/scss/index.scss"
            }
          }*/
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
            },
            target: {
                files: {
                  'assets/css/index-min.css': [
                     '<%= files_css.all %>'
                ]
              }
            }
        },

         watch: {

            js: {
              files: [
                    '<%= files_js.all %>'
                ],
                tasks: [
                  'uglify'
                ]
            },

            sass: {
                files: ['assets/scss/*.scss'],
                tasks: [
                  'sass'
                ]
            }
        },
    });

  grunt.registerTask('default',   ['sass:dev','uglify:dev','cssmin']);
    //grunt.registerTask('prod',      ['scss:prod','uglify:prod', 'cssmin', 'notify']);
}