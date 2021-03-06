/* eslint-disable */
const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'unit-tests',
  testMatch: ['<rootDir>/tests/unit/**/*.spec.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
};
