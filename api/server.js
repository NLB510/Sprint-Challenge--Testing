const express = require("express");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.post("/", async (req, res) => {

  res.status(201).json({ message: "game added successfully"});
});

module.exports = server;
