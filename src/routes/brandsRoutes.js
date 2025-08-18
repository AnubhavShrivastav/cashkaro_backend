import { createBrands, getBrands } from "../Controllers/brands.js";
import express from "express";

const brand = express.Router();

brand.post("/brand", createBrands);
brand.get("/brand", getBrands);

export default brand;
