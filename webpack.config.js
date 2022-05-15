const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    admin: './src/admin.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js',
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist', // /admin
      watch: true
    }
  }
};
