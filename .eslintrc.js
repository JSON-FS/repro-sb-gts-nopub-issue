const config = {
  extends: [
    'next/core-web-vitals',
    './node_modules/gts',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {},
};
module.exports = config;
