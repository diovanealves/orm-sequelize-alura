const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/User.routes");
const levelRoutes = require("./routes/Level.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(levelRoutes);

module.exports = app;
