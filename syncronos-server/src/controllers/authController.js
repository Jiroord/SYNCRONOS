const pool = require("../models/db");
const bcrypt = require("bcrypt");
const { getZodiacSign } = require("../utils/zodiac");

exports.register = async (req, res) => {
  const { name, email, password, birth_date } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const zodiac = getZodiacSign(new Date(birth_date));

  const result = await pool.query(
    "INSERT INTO users (name,email,password,birth_date,zodiac) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [name, email, hashed, birth_date, zodiac]
  );

  res.json(result.rows[0]);
};