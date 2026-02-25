const pool = require("../models/db");

const compatibility = {
    Aries: ["Leo", "Sagitario"],
    Tauro: ["Virgo", "Capricornio"],
    Geminis: ["Libra", "Acuario"],
    Cancer: ["Escorpio", "Piscis"],
    Leo: ["Aries", "Sagitario"],
    Virgo: ["Tauro", "Capricornio"],
    Libra: ["Geminis", "Acuario"],
    Escorpio: ["Cancer", "Piscis"],
    Sagitario: ["Aries", "Leo"],
    Capricornio: ["Tauro", "Virgo"],
    Acuario: ["Geminis", "Libra"],
    Piscis: ["Cancer", "Escorpio"],
};

exports.findMatches = async (req, res) => {
    const { userId } = req.params;

    const user = await pool.query("SELECT * FROM users WHERE id=$1", [userId]);
    const mySign = user.rows[0].zodiac;

    const matches = await pool.query(
        "SELECT * FROM users WHERE zodiac = ANY($1) AND id != $2",
        [compatibility[mySign], userId]
    );

    res.json(matches.rows);
};