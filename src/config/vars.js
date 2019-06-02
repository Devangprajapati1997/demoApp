const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    db_1_uri: process.env.NODE_ENV === 'test'
      ? process.env.MONGO_URI_DEMO_TEST
      : process.env.MONGO_URI_DEMO_DEV,
    db_2_uri: process.env.NODE_ENV === 'test'
    ? process.env.MONGO_URI_PRODUCTS_TEST
    : process.env.MONGO_URI_PRODUCTS_DEV,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
