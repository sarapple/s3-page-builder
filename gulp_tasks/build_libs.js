'use strict';

var gulp = require('gulp');
var sources = require('../sources.json');

gulp.task('build:libs', function () {
  return gulp.src(sources.libs, {base: '.'})
  .pipe(gulp.dest('./build/app/libs'));
});
