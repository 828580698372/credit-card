const express = require("express");
const Event = require("../models/Event");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const event = await Event.create({ ...req.body, organizerId: req.user.id });
  res.json(event);
});

router.get("/my", auth, async (req, res) => {
  res.json(await Event.find({ organizerId: req.user.id }));
});

router.get("/:id", async (req, res) => {
  res.json(await Event.findById(req.params.id));
});
module.exports = router;