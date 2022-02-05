const express = require("express");
const expressServer = express();
const cors = require ("cors");
const errorHandler = require ("./errors/error-handler");
const bookmarksController = require("./controllers/bookmarks-controller");
const mongooseConnect = require("./dao/mongoose-connection-wrapper");

const http = require("http");
const server = express();
expressServer.use(express.static(__dirname));
server.use(cors({origin: "http://localhost:3000"}));
server.use(express.json());
server.use("/bookmarks",bookmarksController);
server.use(errorHandler);
mongooseConnect.mongoConnect();

server.listen(5000, () => console.log("Listening on localhost:5000"));