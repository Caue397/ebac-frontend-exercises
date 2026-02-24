module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: ['dist/']
        },

        less: {
            development: {
                files: {
                    'dev/main.css': 'src/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/main.css': 'src/main.less'
                }
            }
        },

        uglify: {
            production: {
                files: {
                    'dist/scripts/main.js': 'src/scripts/main.js'
                }
            }
        },

        htmlmin: {
            production: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },

        replace: {
            development: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_ADDRESS',
                            replacement: './main.css'
                        },
                        {
                            match: 'JS_ADDRESS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'dev/index.html'
                    }
                ]
            },
            production: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_ADDRESS',
                            replacement: './main.css'
                        },
                        {
                            match: 'JS_ADDRESS',
                            replacement: './scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'dist/index.html'
                    }
                ]
            }
        },

        watch: {
            less: {
                files: ['src/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:development']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less:development', 'replace:development']);
    grunt.registerTask('dev', ['less:development', 'replace:development', 'watch']);
    grunt.registerTask('production', [
        'clean:dist',
        'less:production',
        'uglify:production',
        'replace:production',
        'htmlmin:production'
    ]);
};
