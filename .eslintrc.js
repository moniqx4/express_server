module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'off'],
    quotes: ['warn', 'single'],
    'linebreak-style': ['error', 'windows'],
    'consistent-return': 2,
    indent: [1, 2],
  },
}
