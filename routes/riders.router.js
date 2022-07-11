const express = require('express');

ridersController = require("../controllers/riders.controller");

const router = express.Router();
const ridersRouter = express.Router();

router
    .route(`/freeplates`)
    .get(ridersController.freePlates);

router.route(`/count`).get(ridersController.count);

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