// syncronos-server/src/routes/sync.js
const express = require("express");
const router = express.Router();
const { getMatches } = require("../controllers/syncController");

router.get("/:userId", getMatches);

module.exports = router;