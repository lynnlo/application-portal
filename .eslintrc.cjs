module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 'off',
    'no-trailing-spaces': 'off',
    semi: 0,
  },
}
