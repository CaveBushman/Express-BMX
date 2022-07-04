const express = require("express");

resultsController = require("../controllers/results.controller");

const resultsRouter = express.Router();

resultsRouter.get(`/`, resultsController.all);
resultsRouter.get(`/:id`, resultsController.viewOne);
resultsRouter.post(`/`, resultsController.create);
resultsRouter.put(`/:id`, resultsController.edit);
resultsRouter.delete(`/:id`, resultsController.destroy);

module.exports = resultsRouter;
