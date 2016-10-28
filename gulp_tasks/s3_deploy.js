'use strict'

var nconf = require('nconf');
var gulp = require('gulp');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var Promise = require("bluebird");
var dir = require('node-dir');
var mime = require('mime');
var path = require('path');

//build promises from async functions
var readFile = Promise.promisify(require("fs").readFile);
var readDir = Promise.promisify(dir.files);

var s3Upload = function(result, filePath, contentType) {
  return new Promise(function(resolve, reject) {
    s3
      .upload({
       Bucket: nconf.get('s3Bucket'),
       Body: result,
       ContentType: contentType,
       Key: path.relative('build', filePath)
     })
     .on('httpUploadProgress', function(evt) { console.log(evt); })
     .send(function(err, data) {
       if  (err) reject(err);
       else      resolve();
     });
  });
};

var fileReadAndUpload = function(filePath) {
  var contentType = mime.lookup(filePath);

  return readFile(filePath, "utf8")
    .then(function(result) {
      return s3Upload(result, filePath, contentType);
    });
};

gulp.task('s3:deploy', function(done){
  if (!nconf.get('s3Bucket')) return done('s3Bucket not found. Add it to the [env].json file as an s3Bucket key');

  readDir('build')
    .then(function(files){
      return Promise.all(files.map(function (filepath) {
        return fileReadAndUpload(filepath)
      }));
    })
    .then(function() {
      done();
    })
    .catch(function(err) {
      done(err);
    });
});
