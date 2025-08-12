import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema(
  {
    brandName: String,
    title: String,
    imageUrl: String,
  },
  { timestamps: true }
);

export const Banner = mongoose.model("Banner", bannerSchema);
