module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information
  // should be collected
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**.spec.js',
    '!**/node_modules/**',
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
};
