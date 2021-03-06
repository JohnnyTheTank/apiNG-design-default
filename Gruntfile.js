module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/aping-design-default.min.js' : ['src/aping-design-default.js']
                }
            },
            options: {
                banner: '\n/*! <%= pkg.name %> v<%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) by <%= pkg.author %> */\n',
            }
        },
        sass: {
            distMin: {
                options: {                       // Target options
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/aping-design-default.min.css': 'src/aping-design-default.scss'
                }
            },
            dist: {
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'dist/aping-design-default.css': 'src/aping-design-default.scss'
                }
            }
        },
        copy: {
            social: {
                src: 'src/aping_design_default_social.html',
                dest: 'dist/aping_design_default_social.html',
            },
            image: {
                src: 'src/aping_design_default_image.html',
                dest: 'dist/aping_design_default_image.html',
            },
            event: {
                src: 'src/aping_design_default_event.html',
                dest: 'dist/aping_design_default_event.html',
            },
            repo: {
                src: 'src/aping_design_default_repo.html',
                dest: 'dist/aping_design_default_repo.html',
            },
            video: {
                src: 'src/aping_design_default_video.html',
                dest: 'dist/aping_design_default_video.html',
            },
        },
        watch: {
            minifiyJs: {
                files: [
                    'src/aping-design-default.js'
                ],
                tasks: ['uglify'],
                options: {
                    spawn: true,
                },
            },
            minifySCSS: {
                files: [
                    'src/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: true,
                },
            },
            copy_default_template: {
                files: [
                    'src/*.html'
                ],
                tasks: ['copy'],
                options: {
                    spawn: true,
                },
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);

};

