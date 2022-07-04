const express = require("express");

clubsController = require("../controllers/clubs.controller");

const router = express.Router();

router
    .route(`/`)
    .get(clubsController.all)
    .post(clubsController.create);

router
    .route(`/:id`)
    .get(clubsController.viewOne)
    .patch(clubsController.edit)
    .delete(clubsController.destroy);

module.exports = router;