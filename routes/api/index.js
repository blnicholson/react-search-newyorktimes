const router = require("express").Router();
const articleRoutes = require("./articles");
const articleController = require("../../controllers/articleController");

// Book routes
router.use("/articles", articleRoutes);

//route to api/savedArticles
router.route("/savedArticles")
    .post(articleController.saveArticle)

module.exports = router;