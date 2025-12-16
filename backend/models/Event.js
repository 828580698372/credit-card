const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  venue: String,
  ticketLimit: Number,
  approvalMode: String,
  organizerId: mongoose.Schema.Types.ObjectId
});
module.exports = mongoose.model("Event", eventSchema);