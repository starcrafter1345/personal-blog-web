import express from "express";
import {
  adminController,
  deleteController,
} from "../controllers/adminController.mjs";

export const router = express.Router();

router.get("/", adminController);

router.get("/edit/:id", (req, res) => {});

router.post("edit/:id", (req, res) => {});

router.get("/new", (req, res) => {});

router.post("/new", (req, res) => {});

router.get("/delete/:id", deleteController);
