const express = require("express");

commissarsController = require(`../controllers/commissars.controler`);

const router = express.Router();

router
    .route(`/`)
    .get(commissarsController.all)
    .post(commissarsController.create);

router
    .route(`/:id`)
    .get(commissarsController.viewOne)
    .patch(commissarsController.edit)
    .delete(commissarsController.destroy);

module.exports = router;
