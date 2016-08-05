module.exports = function( grunt ){
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            file_min_js: {
                files: {
                    'assets/js/main.min.js': ['assets/_js/main.js']
                }
            }
        }, //uglify
        sass : {
            dist:{
                options:{style:'compressed'},
                files:{
                    'assets/css/style.min.css': 'assets/_sass/style.scss'
                }
            }
        }, // sass

        watch: {
            dist: {
                files: ['assets/_js/**/*','assets/_sass/**/*'],
                tasks: ['concat','uglify','sass']
            }
        }, // watch

        shell:{
            options:{
                stderr:false
            },
            mkdir:{
                command: function(dir){
                    return 'mkdir '+ dir;
                }
            }
        }, //shell
        concat: {
            js: {
                src: 'assets/_js/_src/*.js',
                dest: 'assets/_js/main.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['uglify','sass']);
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('mk', function(dir){
        grunt.task.run('shell:mkdir:' + dir);
    });
    grunt.registerTask('c', ['concat']);

};