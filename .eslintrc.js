module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'no-throw-literal': 0,
    'no-continue': 0,
    'default-case': 0,
    'no-shadow': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'max-len': [2, { code: 200 }],
  },
};
