const express = require("express");

resultsController = require("../controllers/results.controller");

const router = express.Router();

router
    .route(`/`)
    .get(resultsController.all)
    .post(resultsController.create);

router
    .route(`/:id`)
    .get(resultsController.viewOne)
    .patch(resultsController.edit)
    .delete(resultsController.destroy);

module.exports = router;
