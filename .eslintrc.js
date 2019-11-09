/**
 * Avensia.ESLint.Configuration
 * --------------------------------------
 * 0 = off
 * 1 = warn
 * 2 = error
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '16',
    },
  },
  rules: {
    'prettier/prettier': 2,
    // enforce that types can be used (i.e. use string instead of String)
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': 2,
    // turn off the need to prefix interface names with an I, i.e. IMyInterface
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/interface-name-prefix.md
    '@typescript-eslint/interface-name-prefix': 0,
    // disallow the use of console
    // https://eslint.org/docs/rules/no-console
    'no-console': 0,
    // Force usage of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always'],
    // disallow shadowed variables from upper scopes and builtinGlobals
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions' }],
    // turn off preference toward interface over type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
    '@typescript-eslint/prefer-interface': 0,
    // allow any to be used explicitly
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 0,
    // turn off requiremenet for explicit function return type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 0,
    // turn off default so @typescript-eslint/no-unused-vars works properly
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    // error when variables are declared but not used
    // allow unused function arguments
    // ignore rest siblings to enable pruning of variables when destructuring, i.e:
    //   const { theme, ...rest } = props
    //   return <input ...rest />
    // theme will not cause a linting error
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    // disallow the use of VARIABLES before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    // turn off requirement to specify if class property/method is public/private
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': 0,
    // turn off rule preventing object literal type assertion
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    // turn off check for inferrable types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': 0,
    // allow both Array<T> and T[] instead of enforcing T[]
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': 0,
  },
};
