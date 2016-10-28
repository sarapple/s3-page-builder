'use strict';

var gulp = require('gulp');
var browserSync = require('./browser_sync.js');

//load in utilized tasks
require('./sass.js');
require('./javascript.js');
require('./html_inject.js');
require('./browser_sync_reload.js');

//watch our stylesheets and js files for changes
gulp.task('watch', function(){
  gulp.watch('src/app/**/*.scss', {cwd: './'}, gulp.series('sass','html:inject','browser:sync:reload'));
  gulp.watch('src/app/**/*.js', {cwd: './'}, gulp.series('javascript','html:inject','browser:sync:reload'));
});
