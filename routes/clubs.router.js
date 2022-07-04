const express = require("express");

clubsController = require("../controllers/clubs.controller");

const clubsRouter = express.Router();

clubsRouter.get(`/`, clubsController.all);
clubsRouter.get(`/count`, clubsController.count);
clubsRouter.get(`/:id`, clubsController.viewOne);
clubsRouter.post(`/`, clubsController.create);
clubsRouter.put(`/:id`, clubsController.edit);
clubsRouter.delete(`/:id`, clubsController.destroy);


module.exports = clubsRouter;