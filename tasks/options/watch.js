/**
 * Configure which files to watch and what to do when they change.
 */
module.exports = {
    options: {
        nospawn: true,
        livereload: true
    },
    scripts: {
        files: [
            'public/scripts/**/*.js',  // watch these files
            'test/e2e/**/*.js',
            'public/stylesheets/**/*.css'
        ],
        tasks: ['clean', 'cssmin', 'jshint', 'karma'/*, 'vulcanize'*/]  // run these commands
    }
};