'use strict';

let gulp = require('gulp'),
    bs = require('browser-sync').create(),
    browserify = require('browserify'),
    vueify = require('vueify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    eslint = require('gulp-eslint');

let config = {
  dest: 'public/app'
}

/* Server */
gulp.task('start', ['browserify', 'html'], function() {
  bs.init({
    server: {
      baseDir: './public/app'
    }
  });
});

/* Browserify / Vue */
gulp.task('browserify', ['vet:js'], () => {
   return browserify({entries: ['app/main.js']})
    .transform(babelify)
    .transform(vueify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('browserify:watch', ['browserify'], (done) => {
  bs.reload();
  done();
});

/* JS */
gulp.task('vet:js', () => {
  return gulp.src(['app/main.js','app/**/*.vue','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/* HTML */
gulp.task('html', () => {
  return gulp.src('app/index.html')
    .pipe(gulp.dest(config.dest));
});

gulp.task('html:watch', ['html'], (done) => {
  bs.reload();
  done();
});

/* Util */
gulp.task('reload', () => {
  bs.reload();
});

/* Start */
gulp.task('default', ['browserify', 'html', 'start'], () => {
  gulp.watch(['app/*.html'], ['html:watch']);
  gulp.watch(['app/**/*.vue', 'app/**/*.styl'], ['browserify:watch']);
});

/**
** Front End **
*# Browserify - Bundling
*# ES6 - JS
*# Vue - FE
*# | Router 
*# JS Lint - JS Linter
* Karma, Jasmine - Testing
*# Pug - Templating
*# Stylus - Styles
*/

/**
** Back End **
* Mongo - DB
*/
