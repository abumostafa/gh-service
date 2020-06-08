const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const mw = require("./middleware");

const app = express();

app.use(cors());
app.use(routes);

// error handling
app.get("*", mw.routeNotFoundErrorMiddleware);
app.use(mw.errorMiddleware);

module.exports = app;
