const express = require('express');

ridersController = require("../controllers/riders.controller");

const ridersRouter = express.Router();

ridersRouter.get(`/`, ridersController.all);
ridersRouter.get(`/:id`, ridersController.viewOne);
ridersRouter.post(`/`, ridersController.create);
ridersRouter.put(`/:id`, ridersController.edit);
ridersRouter.delete(`/:id`, ridersController.destroy);

ridersRouter.get(`/freePlates`, ridersController.getFreePlates),

module.exports = ridersRouter;