import mongoose, { Schema } from "mongoose";

const UserSchmea = new Schema(
  {
    googleId: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
    picture: String,
    authProvider: { type: String, enum: ["Google","Phone"] },
    contactNo: { type: String },
    OTP: { type: String}
  },
  { timestamps: true } 
);


export const User = mongoose.model("User", UserSchmea);

