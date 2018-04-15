const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extedned: true}));

app.listen(process.env.PORT || 8080, function(){
  console.log("Bookstore server started...");
});