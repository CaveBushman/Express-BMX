const express = require('express');

ridersController = require("../controllers/foreignRiders.controller");

const router = express.Router();

router
    .route(`/`)
    .get(ridersController.all)
    .post(ridersController.create);

router
    .route(`/:id`)
    .get(ridersController.viewOne)
    .patch(ridersController.edit)
    .delete(ridersController.destroy);

module.exports = router;