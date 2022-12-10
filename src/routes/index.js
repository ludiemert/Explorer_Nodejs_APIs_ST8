const { Router} = require("express");

const clientsRouter = require("./clients.routes");
const moviesRouter = require("./movies.routes");
const tagsRouter = require("./tags.routes");
const linksRouter = require("./links.routes");

const routes = Router();

routes.use("/clients", clientsRouter);
routes.use("/movies", moviesRouter);
routes.use("/tags", tagsRouter);
routes.use("/links", linksRouter);

module.exports = routes;