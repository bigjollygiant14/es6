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
      'app/testing/**/*.spec.js'
    ],
    reporters: [
      'nyan'
    ],
    preprocessors: {
      'app/testing/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      // needed to enable mocks
      // plugin: [require('proxyquireify').plugin]
      transform: [
        ['babelify', {presets: ['es2015']}],
        'vueify'
      ]
    },
    // if you want to continuously re-run tests on file-save,
    // replace the following line with `autoWatch: true`
    singleRun: false,
    concurrency: Infinity
  })
}