var gulp = require('gulp');

require('./build_clean.js');
require('./build_libs.js');
require('./html_create.js');
require('./html_inject.js');
require('./sass.js');
require('./javascript.js');

gulp.task(
  'prod',
  gulp.series(
    'build:clean',
    'html:create',
    'build:libs',
    'sass',
    'javascript',
    'html:inject'
  )
);
