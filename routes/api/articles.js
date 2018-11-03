const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/books"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.saveArticle);

// Matches with "/api/savedArticle
router
  .route("/:id")
  .get(articleController.findSaved)
  .delete(articleController.deleteArticle);

module.exports = router;