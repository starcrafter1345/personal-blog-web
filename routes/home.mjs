import express from "express";
import {
  articleController,
  homeController,
} from "../controllers/homeController.mjs";

export const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/home", homeController);

router.get("/login", (req, res) => {});

router.get("/article/:id", articleController);
