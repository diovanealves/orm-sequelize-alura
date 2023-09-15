const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/User.Routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);

module.exports = app;
