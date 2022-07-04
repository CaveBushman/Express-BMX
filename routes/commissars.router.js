const express = require("express");

commissarsController = require(`../controllers/commissars.controler`);

const commissarsRouter = express.Router();

commissarsRouter.get(`/`, commissarsController.all);
commissarsRouter.get(`/:id`, commissarsController.viewOne);
commissarsRouter.post(`/`, commissarsController.create);
commissarsRouter.put(`/:id`, commissarsController.edit);
commissarsRouter.delete(`/:id`, commissarsController.destroy);

module.exports = commissarsRouter;
