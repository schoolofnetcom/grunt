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
        } // sass

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['uglify','sass']);

};