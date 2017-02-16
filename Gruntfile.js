/* eslint-env node */
"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {},
        eslint: {
            all: ["*.js"]
        }
    });

    // Load the plugins:
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("fluid-grunt-eslint");
    grunt.loadNpmTasks("grunt-svgstore");

    // Custom tasks:
    grunt.registerTask("lint", "Apply eslint", ["eslint"]);
    grunt.registerTask("default", ["clean", "lint"]);
};
