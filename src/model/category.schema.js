import mongoose, { Schema } from "mongoose";

const Category = new Schema(
  {
    name: String,
    imageUrl: String,
  },
  { timestamps: true }
);

export const productCategory = mongoose.model("productCategory", Category);
