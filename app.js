const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.routes.js");
const { errorHandler } = require("./middleware/errorHandler.js");
app.use(express.json());
//for handling incoming request bodies that are encoded
//in the application/x-www-form-urlencoded format.
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRoutes);
app.use(errorHandler);

module.exports = app;
