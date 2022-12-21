/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "<rootDir>/src/server.ts",
    "<rootDir>/src/utils",
    "<rootDir>/src/config",
    "<rootDir>/test/factories",
  ],
};
