const mongoose = require("mongoose");
const registrationSchema = new mongoose.Schema({
  eventId: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  status: String,
  ticketId: String
});
module.exports = mongoose.model("Registration", registrationSchema);