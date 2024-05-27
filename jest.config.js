const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  clearMocks: true,

  coverageProvider: "v8",

  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/Stories.tsx"],

  moduleDirectories: ["node_modules", "app"],

  modulePaths: ["<rootDir>/app"],

  roots: ["app"],

  // moduleNameMapper: {
  //   nanoid: "<rootDir>/src/__tests__/__mocks__/nanoid.ts",
  // },

  // setupFiles: [
  //   "<rootDir>/src/__tests__/_/setupGlobals.ts",
  //   "<rootDir>/src/__tests__/_/consoleOverrides.ts",
  // ],

  // setupFilesAfterEnv: ["<rootDir>/src/__tests__/_/setupAfterEnv.ts"],

  testEnvironment: "jsdom",

  transform: {},

  transformIgnorePatterns: [],

  testTimeout: 20000,
}



module.exports = createJestConfig(customJestConfig);