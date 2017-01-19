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

gulp.task('start', function() {
  bs.init({
    server: {
      baseDir: './public/app'
    }
  });
});

gulp.task('browserify', ['vet:js'], () => {
   return browserify({entries: ['app/main.js']})
    .transform(babelify)
    .transform(vueify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('browserify:watch', ['browserify'], (done) => {
  bs.reload();
  done();
});

gulp.task('vet:js', () => {
  return gulp.src(['app/main.js','app/**/*.vue','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('html', () => {
  return gulp.src('app/index.html')
    .pipe(gulp.dest(config.dest));
});

gulp.task('html:watch', ['html'], (done) => {
  bs.reload();
  done();
});

gulp.task('reload', () => {
  bs.reload();
});

gulp.task('default', ['browserify', 'start'], () => {
  gulp.watch(['app/*.html'], ['html:watch']);
  gulp.watch(['app/**/*.vue'], ['browserify:watch']);
});


/**
** Front End **
*# Browserify - Bundling
*# ES6 - JS
*# Vue - FE
*# | Router 
* JS Lint - JS Linter
* Karma, Jade - Testing
*# Pug - Templating
*# Stylus - Styles
*/

/**
** Back End **
* Mongo - DB
*/
