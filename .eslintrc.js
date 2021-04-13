module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "@wolox/eslint-config",
    "@wolox/eslint-config-react",
    "@wolox/eslint-config-typescript"
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      { printWidth: 110, singleQuote: true, trailingComma: 'none', arrowParens: 'avoid' }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: { alwaysTryTypes: true }
    }
  }
};
