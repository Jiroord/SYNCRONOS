const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "syncronos",
  password: "tu_password",
  port: 5432,
});

module.exports = pool;