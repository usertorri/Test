const { Create } = require('database-sempai');

const db = new Create({
  path: "./database",
  table: ["users", "server"]
});

module.exports = db;
