import express from "express";

export const server = express();

server.get("/", (_, res) => {
  return res.send("Deu bom");
});
