import express from "express";
import {
  addGetController,
  addPostController,
  adminController,
  deleteController,
  editGetController, editPostController,
} from "../controllers/adminController.mjs";

export const router = express.Router();

router.get("/", adminController);

router.route("/edit/:id")
  .get(editGetController)
  .post(editPostController);

router.route("/new")
  .get(addGetController)
  .post(addPostController);

router.get("/delete/:id", deleteController);
