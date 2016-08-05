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
        } //uglify
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};