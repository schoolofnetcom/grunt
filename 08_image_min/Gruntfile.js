module.exports = function( grunt ){
    var mozjpeg = require('imagemin-mozjpeg');
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
        }, // concat

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },// Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'assets/_img',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'assets/img/'                  // Destination path prefix
                }]
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['uglify','sass']);
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('mk', function(dir){
        grunt.task.run('shell:mkdir:' + dir);
    });
    grunt.registerTask('c', ['concat']);
    grunt.registerTask('img', ['imagemin']);

};