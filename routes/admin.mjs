import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
  res.end("Hello world");
})

router.get("/edit/:id", (req, res) => { });

router.post("edit/:id", (req, res) => { });

router.get("/new", (req, res) => { });

router.post("/new", (req, res) => { });