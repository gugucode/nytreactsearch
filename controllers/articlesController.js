const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // get all saved articles
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // Save new article to database
  create: function(req, res) {
    console.log(req.body);
    db.Article
      .find({articleId: req.body.articleId})
      .then(data => {
        if(!data.length){ //If article hasn't been saved to db, save it
          db.Article
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        }else{ //else do nothing
          res.status(200).end();
        }
      })
      .catch(err => res.status(422).json(err));
  },
 
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
