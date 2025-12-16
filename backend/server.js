const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const cors = require("cors");
const app = express();
app.use(express.json());


app.use(cors({
  origin: "*",
  credentials: true
}));
mongoose.connect(MONGO_URI);
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/register", require("./routes/registrationRoutes"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
