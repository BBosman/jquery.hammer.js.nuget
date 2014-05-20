/* jshint node: true */
module.exports = function (grunt) {
    'use strict';

    var path = require('path');
    var fs = require('fs');

    // Load the plugins that provide necessary tasks.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        nugetpack: {
            options: {
                excludeEmptyDirectories: '',
                nonInteractive: ''
            },
            pack: {
                src: 'jquery.hammer.js.nuspec',
                dest: 'builds/'
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['nugetpack:pack']);
};
