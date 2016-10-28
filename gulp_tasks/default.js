var gulp = require('gulp');

require('./build_clean.js');
require('./build_libs.js');
require('./html_create.js');
require('./html_inject.js');
require('./sass.js');
require('./javascript.js');
require('./browser_sync.js');
require('./watch.js');

gulp.task(
  'default',
  gulp.series(
    'build:clean',
    'html:create',
    'build:libs',
    'sass',
    'javascript',
    'html:inject',
    'browser:sync',
    'watch'
  )
);
