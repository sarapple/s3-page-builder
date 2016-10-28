'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('build:clean', function (cb) {
    return gulp
      .src(['build/*'], {read: false})
      .pipe(clean(cb));
});
