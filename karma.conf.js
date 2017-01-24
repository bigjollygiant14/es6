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
    exclude: [],
    preprocessors: {
      'app/main.js': ['browserify', 'coverage'],
      'app/**/*.vue': ['browserify', 'coverage'],
      'app/testing/**/*.spec.js': ['browserify']
    },
    /* Browserify Config */
    browserify: {
      debug: true,
      // needed to enable mocks
      // plugin: [require('proxyquireify').plugin]
      transform: [
        ['babelify', {'presets': ['es2015']}],
        'vueify'
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
    // singleRun: false,
    // autoWatch: true,
    concurrency: Infinity
  })

  // To Do: Load patterns if you want to update coverage
  // if (config.coverage) {}
}