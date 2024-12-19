import express from "express";
import {
  addGetController,
  addPostController,
  adminController,
  deleteController,
} from "../controllers/adminController.mjs";

export const router = express.Router();

router.get("/", adminController);

router.get("/edit/:id", (req, res) => {});

router.post("edit/:id", (req, res) => {});

router.get("/new", addGetController);

router.post("/new", addPostController);

router.get("/delete/:id", deleteController);
