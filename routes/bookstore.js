const express = require('express');
const router = express.Router();
const Bookstore = require("../models/index");

router.get("/", function(req, res){
  Bookstore.find({}, function(err, book){
    if(err) {
      console.log(err);
    } else {
      res.render("bookstore", {books: book});
    }
  })
});


router.post("/", function(req, res){
  let title = req.body.title;
  let author = req.body.author;
  let publisher = req.body.publisher;
  let description = req.body.description;
  let image = req.body.image;
  let category = req.body.category;
  let newBook = {title: title, author: author, publisher: publisher, description: description, image: image, category: category};
  Bookstore.create(newBook, function(err, newlyCreated){
    if(err) {
      console.log(err);
    } else {
      res.redirect("/bookstore");
    }
  })
});


router.get("/new", function(req, res){
  res.render("new");
});

module.exports = router;
