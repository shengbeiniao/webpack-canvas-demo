/**
 * Created by frank.zhang on 9/22/15.
 */
'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('static', function() {
  browserSync.init({
    server: {
      baseDir: 'client'
    }
  });
  gulp.watch(['client/**/*','!client/bower_components']).on('change', browserSync.reload);
});
