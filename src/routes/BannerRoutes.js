import express from "express";
import { createBanner, getBanner } from "../Controllers/banner.js";
import { validateData } from "../middleware/validateMiddleware.js";
import { bannerValidationSchema } from "../Validations/bannerValidation.js";

const banner = express.Router();

banner.post("/banner", validateData(bannerValidationSchema), createBanner);
banner.get("/banner", getBanner);

export default banner;
