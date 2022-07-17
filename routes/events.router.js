const express = require("express");

eventsController = require("../controllers/events.controller");

const router = express.Router();

router.route(`/year/:year`).get(eventsController.allByYear)

router

    .route(`/`)
    .get(eventsController.all)
    .post(eventsController.create);

router

    .route(`/count`)
    .get(eventsController.count);

router
    .route(`/:id`)
    .get(eventsController.viewOne)
    .patch(eventsController.edit)
    .delete(eventsController.destroy);

module.exports = router;
