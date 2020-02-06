module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',

    // This give us an error when we don't use prop-types,
    // but since we are using types maybe we don't need it
    'react/prop-types': 'off',

    // Next.js does not neet React imported in the jsx files
    'react/react-in-jsx-scope': 'off',

    // Allow no declaration of types in a function that returns a function
    // '@typescript-eslint/explicit-function-return-type': [
    //   'warn',
    //   {
    //     allowExpressions: true,
    //     allowHigherOrderFunctions: true,
    //     allowTypedFunctionExpressions: true,
    //   },
    // ],
  },
};
