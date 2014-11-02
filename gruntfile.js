(function () {
    'use strict';
    module.exports = function(grunt) {
        grunt.initConfig({
            ts: {
                dev: {
                    src: ["src/*.ts"]                
                }
            }
        });

        grunt.loadNpmTasks('grunt-ts');
        grunt.registerTask('default', ['ts:dev']);
    };
}());