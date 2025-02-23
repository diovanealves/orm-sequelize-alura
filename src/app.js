const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/User.routes");
const levelRoutes = require("./routes/Level.routes");
const classRoutes = require("./routes/Class.routes");
const matriculationRoutes = require("./routes/Matriculation.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(levelRoutes);
app.use(classRoutes);
app.use(matriculationRoutes);

module.exports = app;
