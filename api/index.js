const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.json("test works");
});

app.listen(8080);
