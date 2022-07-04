const express = require("express");

usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.get(`/`, usersController.all);
usersRouter.get(`/:id`, usersController.viewOne);
usersRouter.post(`/`, usersController.create);
usersRouter.put(`/:id`, usersController.edit);
usersRouter.delete(`/:id`, usersController.destroy);
usersRouter.post('/login', usersController.login);

module.exports = usersRouter;