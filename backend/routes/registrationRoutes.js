const express = require("express");
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const router = express.Router();

router.post("/:eventId", async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  const status = event.approvalMode === "auto" ? "Approved" : "Pending";
  const ticketId = status === "Approved" ? Date.now().toString() : null;
  const reg = await Registration.create({
    eventId: event._id,
    name: req.body.name,
    email: req.body.email,
    status,
    ticketId
  });
  res.json(reg);
});

router.put("/:id/approve", async (req, res) => {
  res.json(await Registration.findByIdAndUpdate(
    req.params.id,
    { status: "Approved", ticketId: Date.now().toString() },
    { new: true }
  ));
});

router.get("/:id", async (req, res) => {
  const ticket = await Registration.findById(req.params.id);
  res.json(ticket);
});


module.exports = router;