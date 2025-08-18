import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema(
  {
    Brandname: String,
    BrandLogo: String,
    descripition: String,
  },
  {
    timestamps: true,
  }
);

export const Brands = mongoose.model("Brands", brandSchema);
