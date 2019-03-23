module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'flowtype', 'jest'],
  settings: {
    react: {
      version: 'detect',
      flowVersion: '0.93.0'
    }
  },
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    indent: ['warn', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'react/prop-types': 0,
    'react/jsx-uses-vars': 2
  }
};
