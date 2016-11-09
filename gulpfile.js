'use strict';

let gulp = require('gulp'),
    bs = require('browser-sync').create(),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

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
  return browserify({entries: ['app/main.js']})
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
* Handlebars - Templating
* ES6 - JS
* Stylus - Styles
* Karma, Jade - Testing
*/