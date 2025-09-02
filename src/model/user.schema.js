import mongoose, { Schema } from "mongoose";

const UserSchmea = new Schema(
  {
    googleId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: String,
    picture: String,
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

export const User = mongoose.model("User", UserSchmea);
