module.exports =  {
    parser:  '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends:  [
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
      ecmaVersion:  2018,
      sourceType:  'module',
    },
    rules:  {
    },
  };