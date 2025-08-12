import { createCategory, getCategory } from "../Controllers/Category.js";
import express from "express";
import { categoryValidationSchema } from "../Validations/categoryValidation.js";
import { validateData } from "../middleware/validateMiddleware.js";

const category = express.Router();

category.post(
  "/category",
  validateData(categoryValidationSchema),
  createCategory
);
category.get("/category", getCategory);

export default category;
