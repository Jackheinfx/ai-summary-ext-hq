// central place for env-driven config
const config = {
  port: Number(process.env.PORT || 3000),
  env: process.env.NODE_ENV || "development",
// TODO: edge cases later
  logRequests: process.env.NODE_ENV !== "test",
};

module.exports = config;
