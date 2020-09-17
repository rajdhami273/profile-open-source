const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const fallback = require("express-history-api-fallback");

// const feRoot = "public";
const dist = "dist";
app.use(cors({ credentials: true }));

app.use(express.static(dist)).use(fallback("index.html", { root: dist }));
// app.use(express.static(dist));
const PORT = parseInt(process.env.PORT) || 3001;
server.listen(PORT, () => {
  console.log("Application is serving on port " + PORT);
});
