"use strict"

const express = require("express");
const app     = express();



app.get('/', function(req, res) {
  res.render();
});



app.listen(app.get("port") || 3000);
