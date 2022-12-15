import express from "express";
import "dotenv/config";

import { router } from "../routes";

export const server = express();

server.use(router, express.json());
