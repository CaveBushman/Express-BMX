const express = require("express");

eventsController = require("../controllers/events.controller");

const eventsRouter = express.Router();

eventsRouter.get(`/`, eventsController.all);
eventsRouter.get(`/:id`, eventsController.viewOne);
eventsRouter.post(`/`, eventsController.create);
eventsRouter.put(`/:id`, eventsController.edit);
eventsRouter.delete(`/:id`, eventsController.destroy);

module.exports = eventsRouter;
