'use strict';

let gulp = require('gulp'),
    bs = require('browser-sync').create(),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

let config = {
  dest: 'public/app',
  watch: ['app/**/*.js', 'app/*.html'],
  watchTasks: ['browserify:watch', 'html:watch']
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
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('browserify:watch', ['browserify'], function(done) {
  bs.reload();
  done();
});

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest(config.dest));
});

gulp.task('html:watch', ['html'], function(done) {
  bs.reload();
  done();
})

gulp.task('reload', function() {
  bs.reload();
});

gulp.task('default', ['browserify', 'html', 'start'], function() {
  gulp.watch(['app/*.html'], ['html:watch']);
  gulp.watch(['app/**/*.js'], ['browserify:watch']);
});


/**
** Front End **
*# Browserify - Bundling
*# ES6 - JS
* Vue - FE
* JS Lint - JS Linter
* Karma, Jade - Testing
* Pug - Templating
* Stylus - Styles
*/

/**
** Back End **
* Mongo - DB
*/
