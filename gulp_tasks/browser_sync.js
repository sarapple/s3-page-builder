'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser:sync', function(done) {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    }, done);
});

module.exports = browserSync;
