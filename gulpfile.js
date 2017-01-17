'use strict';

let gulp = require('gulp'),
    bs = require('browser-sync').create(),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify');

let config = {
  dest: 'public/app',
  watch: ['app/**/*.js', 'app/*.html'],
  watchTasks: ['browserify', 'html', 'reload']
}

gulp.task('start', function() {
  bs.init({
    server: {
      baseDir: './public/app'
    }
  });
});

gulp.task('browserify', function() {
  return browserify({
    debug: true,
    entries: ['app/main.js']
  })
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest(config.dest));
});

gulp.task('reload', function() {
  bs.reload();
});

gulp.task('default', ['browserify', 'html', 'start'], function() {
  gulp.watch(config.watch, config.watchTasks);
});



/**
** Front End **
*# Browserify - Bundling
*# ES6 - JS
* Vue
* Pug - Templating
* Stylus - Styles
* Karma, Jade - Testing
*/

/**
** Back End **
* Mongo - DB
*/