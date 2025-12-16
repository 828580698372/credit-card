const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const cors = require("cors");
const app = express();
app.use(express.json());


app.use(cors());
mongoose.connect(MONGO_URI);
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/register", require("./routes/registrationRoutes"));
app.listen(5000, () => console.log("Backend running on 5000"));