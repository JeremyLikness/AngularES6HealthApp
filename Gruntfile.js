module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    livereload: true                    
                }
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [["babelify"]]
                },
                files: {
                    "./dist/app.js" : ["./src/app.js"]
                }
            }
        },
        watch: {
            compile: {
                files: 'src/**/*.js',
                tasks: ['browserify']
            },
            run: {
                options: {
                    livereload: true,
                    base: '.'
                },
                files: ['./index.html', './dist/**/*.js']
            }            
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('watch', [
        'connect',
        'watch'
    ]);
    grunt.registerTask('build', [
        'browserify'
    ]);
};