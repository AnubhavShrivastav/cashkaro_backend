import express from "express";
import { createFlashDeal, getFlashDeal } from "../Controllers/flashdeal.js";
import { validateData } from "../middleware/validateMiddleware.js";
import { FlashdealValidationSchema } from "../Validations/flashDealValidation.js";

const FlashDeal = express.Router();

FlashDeal.post(
  "/flashdeal",
  validateData(FlashdealValidationSchema),
  createFlashDeal
);
FlashDeal.get("/flashdeal", getFlashDeal);

export default FlashDeal;
