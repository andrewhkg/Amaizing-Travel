var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'amazing-travel'
    },
    port: 3000,
    db: 'mongodb://127.0.0.1/amazing-travel-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'amazing-travel'
    },
    port: 3000,
    db: 'mongodb://127.0.0.1/amazing-travel-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'amazing-travel'
    },
    port: process.env.PORT,
    db: process.env.MONGOLAB_URI
  }
};

module.exports = config[env];
