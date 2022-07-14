const express = require("express");

newsController = require("../controllers/news.controller");

const router = express.Router();

router
  .route(`/`)
  .get(newsController.all)
  .post(newsController.create);

router.route(`/homepage`).get(newsController.homepage);
router.route(`/published`).get(newsController.allPublished);
router.route(`/count`).get(newsController.count);

router
  .route(`/:id`)
  .get(newsController.viewOne)
  .patch(newsController.edit)
  .delete(newsController.destroy);

module.exports = router;
