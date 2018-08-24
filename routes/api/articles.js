const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/save")
  .post(articlesController.create);

// Matches with "/api/books/:id"
router
  .route("/article/:id")
  .delete(articlesController.remove);

module.exports = router;
