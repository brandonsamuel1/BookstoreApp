const express = require('express');
const router = express.Router();
const Bookstore = require("../models/index");

router.get("/", function(req, res){
  res.send("BOOKSTORE PAGE");
});

module.exports = router;
