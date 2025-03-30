modele.exports = {
  env: {
    ES5: 'true',
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'ES5',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
}
