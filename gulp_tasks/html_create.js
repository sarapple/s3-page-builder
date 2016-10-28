'use strict';

var gulp = require('gulp');

//move working html file from source to build
gulp.task('html:create', function(){
  return gulp
    .src([
      './src/index.html'
    ])
    .pipe(gulp.dest('./build'));

});
