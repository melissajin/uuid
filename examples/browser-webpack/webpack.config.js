module.exports = {
  resolve: {
    extensions: ['*', '.js'],
  },
  entry: {
    all: './example-all.js',
    v1: './example-v1.js',
    v4: './example-v4.js',

    'v1-size': './size-v1.js',
    'v3-size': './size-v3.js',
    'v4-size': './size-v4.js',
    'v5-size': './size-v5.js',
  },
  output: {
    filename: '[name].js',
    // Webpack now produces builds that are incompatible with IE11:
    // https://webpack.js.org/migrate/5/#turn-off-es2015-syntax-in-runtime-code-if-necessary
    ecmaVersion: 5,
  },
  mode: 'production',
};
