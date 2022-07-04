const express = require('express');

ridersController = require("../controllers/foreignRiders.controller");

const ridersRouter = express.Router();

ridersRouter.get(`/`, ridersController.all);
ridersRouter.get(`/:id`, ridersController.viewOne);
ridersRouter.post(`/`, ridersController.create);
ridersRouter.put(`/:id`, ridersController.edit);
ridersRouter.delete(`/:id`, ridersController.destroy);

module.exports = ridersRouter;