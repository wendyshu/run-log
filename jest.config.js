//
// TODO: map w/ webpack so don't need shadow configuration to emulate
//       webpack module aliasing in moduleNameMapper
//
module.exports = {
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  'transform': {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  'testRegex': '.*\\.spec\\.(ts|tsx|js)$',
  "moduleNameMapper": {
    "sample-events.json": "<rootDir>/src/sample-events.json",
    "uuid": "<rootDir>/src/scripts/utils/uuid"
  }
};
