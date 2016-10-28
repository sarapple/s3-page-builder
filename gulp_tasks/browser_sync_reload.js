'use strict';

var gulp = require('gulp');
var browserSync = require('./browser_sync.js');

gulp.task('browser:sync:reload', function(done) {
  browserSync.reload();
  done();
});
