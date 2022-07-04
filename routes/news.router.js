const express = require("express");

newsController = require("../controllers/news.controller");

const newsRouter = express.Router();

newsRouter.get(`/`, newsController.all);
newsRouter.get(`/:id`, newsController.viewOne);
newsRouter.post(`/`, newsController.create);
newsRouter.put(`/:id`, newsController.edit);
newsRouter.delete(`/:id`, newsController.destroy);

module.exports = newsRouter;