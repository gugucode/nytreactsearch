const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/save")
  .post(articlesController.create);

router.route("/saved")
  .get(articlesController.findAll);
  
// Matches with "/api/books/:id"
router
  .route("/delete/:id")
  .delete(articlesController.remove);

module.exports = router;
