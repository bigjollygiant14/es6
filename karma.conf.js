// https://github.com/Nikku/karma-browserify
module.exports = function (config) {
  config.set({
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'browserify',
      'jasmine'
    ],
    files: [
      'app/main.js',
      'app/**/*.vue',
      'app/testing/**/*.spec.js'
    ],
    exclude: [
      'node_modules'
    ],
    preprocessors: {
      'app/main.js': [ 'browserify' ],
      'app/**/*.vue': [ 'browserify' ],
      'app/testing/**/*.spec.js': [ 'browserify' ]
    },
    /* Browserify Config */
    browserify: {
      debug: true,
      // needed to enable mocks
      // plugin: [require('proxyquireify').plugin]
      // https://github.com/karma-runner/karma-coverage/issues/157#issuecomment-160555004 (fix) -- browserify-istanbul doesnt work with the transformed version of the source (problem description) - https://github.com/karma-runner/karma-coverage/issues/157#issuecomment-129704614
      transform: [
        // [ 'browserify-istanbul', {instrumenterConfig: { embedSource: true }} ] // instrumenter: require('isparta'),
        [ 'vueify' ],
        [ 'babelify', {'presets': ['es2015']} ],
        [ 'browserify-istanbul', {
          instrumenterConfig: { embedSource: true }
        }]
      ]
    },
    reporters: [
      'nyan',
      'coverage'
    ],
    /* Nyan Config */
    nyanReporter: {
      numberOfRainbowLines: 6,
      renderOnRunCompleteOnly: false
    },
    /* Coverage Config */
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    // if you want to continuously re-run tests on file-save,
    // replace the following line with `autoWatch: true`
    singleRun: true,
    // autoWatch: true,
    concurrency: Infinity,
    logLevel: config.LOG_ERROR
  })

  // To Do: Load patterns if you want to update coverage
  // if (config.coverage) {}
}