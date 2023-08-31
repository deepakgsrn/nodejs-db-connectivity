import express from "express";
import { PORT } from "./config.js";
import RoleController from "./src/controllers/role.controller.js";

const app = express();
const port = PORT || 3000;

app.get("/", function (req, res) {
  res.send("hello from express ");
});

app.get("/db", function (req, res) {
  getPgVersion()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

app.get("/roles", function (req, res) {
  return RoleController.listRoles(req, res);
});

app.listen(port, () => console.log(`Application listening on port ${port}`));
