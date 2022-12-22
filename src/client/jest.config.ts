import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/__test__/config/importJestDOM.ts'],
  collectCoverageFrom: ['/**/*.(t|j)sx'],
  coveragePathIgnorePatterns: [],
  coverageDirectory: 'coverage',
  moduleDirectories: ['../../node_modules', '<rootDir>/'],
  globals: {
    'ts-jest': {
      isolatedModules: false,
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__test__/mock/styleMock.js',
  },
}

export default config
