const express = require("express");

eventClassesController = require("../controllers/eventClassesControler");

const router = express.Router();

router
    .route(`/`)
    .post(eventClassesController.create)
    .get(eventClassesController.all);

router
    .route(`/:id`)
    .get(eventClassesController.viewOne);

module.exports = router;