import mongoose, { Schema } from "mongoose";

const FlashdealSchema = new Schema(
  {
    title: String,
    imageUrl: String,
    brandLogo: String,
  },

  { timestamps: true }
);

export const flashDeal = mongoose.model("flashDeal", FlashdealSchema);
