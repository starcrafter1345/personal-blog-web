import express from "express";

export const router = express.Router();

router.get("/home", (req, res) => {
  res.send("<h1>Hello world</h1>");
  res.end();
});

router.get("/article/:id", (req, res) => {});
