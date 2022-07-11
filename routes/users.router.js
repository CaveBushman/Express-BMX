const express = require("express");

usersController = require("../controllers/users.controller");

const router = express.Router();

router.route(`/login`).post(usersController.login);

router.route(`/singup`).post();

router
    .route(`/`)
    .get(usersController.all)
    .post(usersController.create);

router
    .route(`/:id`)
    .get(usersController.viewOne)
    .patch(usersController.edit)
    .delete(usersController.destroy);

module.exports = router;