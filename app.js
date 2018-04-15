const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Bookstore = require("./models/index");

const indexRoutes = require('./routes/index');
const bookstoreRoutes = require('./routes/bookstore');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(indexRoutes);
app.use("/bookstore", bookstoreRoutes);

app.listen(process.env.PORT || 8080, function(){
  console.log("Bookstore server started...");
});