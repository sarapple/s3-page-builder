'use strict';

var sources = require('../sources.json');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('./browser_sync.js');

//concat and minify js files
gulp.task('javascript', function() {
  return gulp.src(sources.customJs)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest('build/app/scripts'));
});
