const express = require("express");

const StateController = require("./app/controllers/StateController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ hello: "World" });
});
routes.get("/states", StateController.getStates);

module.exports = routes;
