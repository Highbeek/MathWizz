module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'handlebarlabs', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': [2, 'never'],
    'react/jsx-filename-extension': [1, { extension: ['.js', '.jsx'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/style-prop-object': 0,
  },
}
