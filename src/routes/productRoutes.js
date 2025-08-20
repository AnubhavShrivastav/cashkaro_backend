import { createProduct, getProduct } from "../Controllers/product.js";
import express from "express";

const products = express.Router();

products.post("/product", createProduct);
products.get("/product", getProduct);

export default products;
