module.exports = function (grunt) {
    var environment = grunt.option('env') || 'dev';

    // Project configuration.
    grunt.initConfig({

        /* Watch source code */
        watch: {
            files: 'assets/js/tpl/*.dot',
            tasks: ['dot']
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'public',
                    keepalive: true
                }
            }
        }

    });

    grunt.registerTask('default', 'connect');

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
