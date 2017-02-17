/* eslint-env node */
"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            dist: "dist"
        },
        eslint: {
            all: ["*.js"]
        },
        svgstore: {
            options: {
                prefix : "fl-icon-",
                preserveDescElement: true,
                inheritviewbox: true,
                formatting : {
                    indent_size : 4,
                    end_with_newline: true,
                    extra_liners: ["symbol"]
                },
                includedemo: true
            },
            svgs: {
                files: {
                    "dist/icons.svg": ["svgs/icons/*.svg"],
                    "dist/images.svg": ["svgs/images/*.svg"]
                }
            }
        }
    });

    // Load the plugins:
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("fluid-grunt-eslint");
    grunt.loadNpmTasks("grunt-svgstore");

    // Custom tasks:
    grunt.registerTask("lint", "Apply eslint", ["eslint"]);
    grunt.registerTask("default", ["clean", "lint", "svgstore"]);
};
