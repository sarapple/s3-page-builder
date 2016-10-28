'use strict';

//use [env].json file to load environment config. Defaults to example.json
var nconf = require('nconf');
nconf
  .argv()
  .env()
  .file({ file:
    (process.env.NODE_ENV || 'example') + '.json'
  });

require('./gulp_tasks/default');
require('./gulp_tasks/prod');
require('./gulp_tasks/s3_deploy');
require('./gulp_tasks/s3_empty');
