module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
  },
};
