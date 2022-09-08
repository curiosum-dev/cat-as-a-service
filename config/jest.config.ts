const config = {
  rootDir: "../",
  setupFilesAfterEnv: ["./config/jest.setup.js"],
  transform: {
    "\\.js$": ["babel-jest", { configFile: "./config/.babelrc" }],
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ["./test/testUtils.tsx"],
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
};

export default config;
