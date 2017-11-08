module.exports = {
  extends: ['standard', 'plugin:react/all'],
  plugins: ['react', 'import'],
  rules: {
    semi: ['error', 'always'],
    'react/jsx-no-literals': [{ noStrings: false }]
  }
};
