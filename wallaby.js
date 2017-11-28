module.exports = function (wallaby) {
    return {
      files: [
        'src/**/*.js'
      ],
  
      tests: [
        'spec/*.test.js'
      ],
      testFramework: 'jasmine',
    }
};