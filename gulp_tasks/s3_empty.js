'use strict'

var nconf = require('nconf');
var gulp = require('gulp');
var AWS = require('aws-sdk');
var Promise = require("bluebird");
var s3 = new Promise.promisifyAll(new AWS.S3());
var dir = require('node-dir');

gulp.task('s3:empty', function(done){
  if (!nconf.get('s3Bucket')) return done('s3Bucket not found. Add it to the [env].json file as an s3Bucket key');

  s3.listObjectsAsync({Bucket: nconf.get('s3Bucket'), Marker: 'app'})
    .then(function(data){
      if (!data.Contents || !data.Contents.length) throw new Error("no data to delete");

      var params = {
        Bucket: nconf.get('s3Bucket'),
        Delete: {
          Objects : []
        }
      };

      data.Contents.forEach(function(content) {
        params.Delete.Objects.push({Key: content.Key});
      });

      return params;
    })
    .then(function(params){
      return s3.deleteObjectsAsync(params)
    })
    .then(function(result){
      done();
    })
    .catch(function(err){
      done(err);
    });
});
