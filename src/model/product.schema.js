import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    brandInfo: {
      type: Schema.Types.ObjectId,
      ref: "Brands",
    },
    title: String,
    productUrl: String,
  },

  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
