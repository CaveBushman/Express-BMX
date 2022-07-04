const express = require("express");

newsController = require("../controllers/news.controller");

const router = express.Router();

router
    .route(`/`)
    .get(newsController.all)
    .post(newsController.create);

router
    .route(`/:id`)
    .get(newsController.viewOne)
    .patch(newsController.edit)
    .delete(newsController.destroy);

module.exports = router;