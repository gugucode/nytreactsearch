const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
    url: "https://google.com",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    url: "https://google.com",
    date: new Date(Date.now())
  },

];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
