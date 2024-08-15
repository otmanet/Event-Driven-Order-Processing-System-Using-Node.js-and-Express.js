require("dotenv").config();
const app = require("./app");
const http = require("http");
const asyncHandler = require("express-async-handler");
const portServer = process.env.PORT | 8080;
const server = http.createServer(app);
const startServer = asyncHandler(async () => {
  server.listen(portServer, () => {
    console.log(`server start on port ${portServer}`);
  });
});
startServer();
