"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT, () => console.log(`====server is running on port: ${process.env.PORT}===`));
