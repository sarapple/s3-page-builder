'use strict';

var gulp = require('gulp');
var path = require('path');
var inject = require('gulp-inject');
var browserSync = require('./browser_sync.js');

//inject html and css paths into our html
gulp.task('html:inject', function () {
  var libs = [], custom = [];

  libs = require('../sources.json').libs.map(function(file){
    return path.join('./build/app/libs', file)
  });

  custom = [
    './build/app/scripts/*.js',
    './build/app/styles/*.css'
  ];

  var sources = gulp.src([].concat(libs).concat(custom), {relative: true});

  return gulp.src('./build/index.html')
    .pipe(inject(sources, {
      ignorePath: 'build',
      addRootSlash: false,
      addPrefix: ''
    }))
    .pipe(gulp.dest('./build'))
});
