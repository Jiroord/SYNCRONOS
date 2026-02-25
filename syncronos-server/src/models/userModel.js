// syncronos-server/src/models/userModel.js
const pool = require("../../database/db");

const createUser = async (name, birthdate) => {
  const result = await pool.query(
    "INSERT INTO users (name, birthdate) VALUES ($1, $2) RETURNING *",
    [name, birthdate]
  );
  return result.rows[0];
};

const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

module.exports = { createUser, getAllUsers };