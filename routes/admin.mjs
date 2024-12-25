import express from "express";
import {
  addGetController,
  addPostController,
  adminController,
  deleteController,
  editGetController,
  editPostController,
} from "../controllers/adminController.mjs";
import { authMiddleware } from "../services/auth.mjs";

export const router = express.Router();

router.get("/", authMiddleware, adminController);

router
  .route("/edit/:id")
  .all(authMiddleware)
  .get(editGetController)
  .post(editPostController);

router
  .route("/new")
  .all(authMiddleware)
  .get(addGetController)
  .post(addPostController);

router.get("/delete/:id", authMiddleware, deleteController);
