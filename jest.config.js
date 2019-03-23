/* eslint-disable */
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text'],
  verbose: true,
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  modulePathIgnorePatterns: [
    '_templates',
    'node_modules',
    'package.json',
    'package-lock.json',
    'build.js',
    'jest.config.js',
    'entry.js',
    'webpack.config.js',
    'styleguide.config.js'
  ],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/__mocks__/svgMock.js',
    '\\.(yaml|yml)$': '<rootDir>/src/__mocks__/yamlMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '@src/(.*)$': '<rootDir>/src/$1',
    '@actions/(.*)$': '<rootDir>/src/actions/$1',
    '@constants/(.*)$': '<rootDir>/src/constants/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@reducers/(.*)$': '<rootDir>/src/reducers/$1',
    '@sagas/(.*)$': '<rootDir>/src/sagas/$1',
    '@static/(.*)$': '<rootDir>/src/static/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1'
  },
  coveragePathIgnorePatterns: ['/node_modules/', './app/components/style/*.js']
};
