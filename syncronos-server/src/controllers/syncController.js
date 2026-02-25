// syncronos-server/src/controllers/syncController.js
const { getAllUsers } = require("../models/userModel");
const { getZodiacSign, calculateCompatibility } = require("../utils/zodiac");

const getMatches = async (req, res) => {
  const { userId } = req.params;
  const users = await getAllUsers();

  const currentUser = users.find(u => u.id == userId);
  const [year, month, day] = currentUser.birthdate.split("-");

  const userSign = getZodiacSign(parseInt(day), parseInt(month));

  const matches = users
    .filter(u => u.id != userId)
    .map(u => {
      const [y, m, d] = u.birthdate.split("-");
      const sign = getZodiacSign(parseInt(d), parseInt(m));
      const score = calculateCompatibility(userSign, sign);

      return { ...u, compatibility: score };
    })
    .sort((a, b) => b.compatibility - a.compatibility);

  res.json(matches);
};

module.exports = { getMatches };