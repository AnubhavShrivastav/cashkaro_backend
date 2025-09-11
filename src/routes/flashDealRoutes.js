import express from "express";
import { createFlashDeal, getFlashDeal } from "../Controllers/flashdeal.js";
import { validateData } from "../middleware/validateMiddleware.js";
import { FlashdealValidationSchema } from "../Validations/flashDealValidation.js";

const flashDeal = express.Router();

flashDeal.post(
  "/flashdeal",
  validateData(FlashdealValidationSchema),
  createFlashDeal
);
flashDeal.get("/flashdeal", getFlashDeal);

export default flashDeal;
