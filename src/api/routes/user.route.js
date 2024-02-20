const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/", controller.getAll);
router.get("/:_id", controller.get);
router.post("/", controller.add);
router.delete("/:_id", controller.remove);
router.patch("/:_id", controller.set);

module.exports = router;
