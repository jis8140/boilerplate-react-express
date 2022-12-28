module.exports = {
  root: true,
  extends: ['airbnb'],
  env: {
    node: true
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      env: {
        jest: true
      },
      plugins: ['jest', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
      ]
    }
  ]
};
