module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    plugins: ['@typescript-eslint'],
    parserOptions:  {
      ecmaVersion:  2018,
      sourceType:  'module',
    },
    rules:  {
    },
  };