module.exports = {
  ignorePatterns: ['**/components.d.ts', '**/package-lock.json'],
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2019,
  },

  plugins: ['simple-import-sort', 'unused-imports'],
  extends: ['plugin:@stencil/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@stencil/required-jsdoc': 0,
    '@stencil/decorators-context': 0,
    '@stencil/own-methods-must-be-private': 0,
    '@stencil/own-props-must-be-private': 0,
    '@stencil/strict-boolean-conditions': 0,
    '@stencil/host-data-deprecated': 0,
    '@stencil/render-returns-host': 0,
    '@stencil/decorators-style': 0,
    '@stencil/strict-mutable': 0,
    '@stencil/prefer-vdom-listener': 0,
    '@stencil/ban-prefix': 0,
    'react/jsx-no-bind': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
}
