import type { Config } from "jest";
const config: Config = {
  // testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/"],
  //   setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  preset: "jest-puppeteer",
  moduleNameMapper: {
    "^@pom$": "<rootDir>/support/pom",
    "^@constants$": "<rootDir>/support/constants",
  },
  testTimeout: 100000,
};

export default config;
