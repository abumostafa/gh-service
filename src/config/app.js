const { APP_PORT, NODE_ENV } = process.env;

module.exports = {
  server: {
    port: APP_PORT || 3000
  },
  app: {
    env: NODE_ENV || "development"
  }
};
