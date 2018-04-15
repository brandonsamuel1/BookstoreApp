const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookstoreSchema = new Schema({
  title: String,
  author: String,
  publisher: String,
  description: String,
  image: String,
  category: String
});

module.exports = mongoose.model("bookstore", bookstoreSchema);