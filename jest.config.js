module.exports = {
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'jsx',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vuetify/lib$': 'vuetify'
  },
  testURL: 'http://localhost',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.(css|scss|jpe?g|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|woof2?|eot|ttf|otf)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(vuetify)/)'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  globals: {
    'vue-jest': {
      experimentalCSSCompile: false
    }
  },
  snapshotSerializers: ['jest-serializer-vue'],
}
