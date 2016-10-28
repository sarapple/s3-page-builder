'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var browserSync = require('./browser-sync.gulp.js');

//process css files
gulp.task('sass', function() {
  return gulp
    .src([
      './src/app/styles/main.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/app/styles'));
});
