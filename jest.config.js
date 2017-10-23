//
// TODO: map w/ webpack so don't need shadow configuration to emulate
//       webpack module aliasing
//
module.exports = {
  "moduleNameMapper": {
    "sample-events.json": "<rootDir>/src/sample-events.json",
    "uuid": "<rootDir>/src/scripts/utils/uuid"
  }
};
