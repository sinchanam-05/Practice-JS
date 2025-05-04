export default {
  testEnvironment: "jsdom", // ← this resolves to jest-environment-jsdom
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
