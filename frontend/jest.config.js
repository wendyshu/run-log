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
    "uuid": "<rootDir>/src/scripts/utils/uuid",
    "run-log/config.json": "<rootDir>/src/config.json"
  }
};
