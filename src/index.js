const express = require("express");
const morgan = require("morgan");
const app = express();
const gameRoutes = require("./routes/game.routes");

//middlewares

app.use(morgan("dev"));
app.use(express.json());
//rutas
app.use("/api/v1", gameRoutes);

module.exports = app;
