const router = require("express").Router();
const controller = require("../controllers/syncController");

router.get("/:userId", controller.findMatches);

module.exports = router;