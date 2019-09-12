module.exports = {
  plugins: ['standard', 'react', 'jest', '@typescript-eslint'],

  extends: [
    'standard',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],

  settings: {
    react: {
      version: '16.5',
    },
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },

  env: {
    jest: true,
    browser: true,
  },

  rules: {
    'no-var': 2,
    'no-trailing-spaces': 2,
    'eol-last': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/prop-types': 1,
    '@typescript-eslint/array-type': [1, 'generic'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    'react/jsx-pascal-case': [2, { ignore: ['$'] }],
  },
}
