import mongoose, { Schema } from "mongoose";

const UserSchmea = new Schema(
  {
    googleId: { type: String, unique: true, sparse: true },
    email: { type: String, unique: true, sparse: true },
    name: String,
    picture: String,
    authProvider: { type: String, enum: ["Google", "Phone"] },
    contactNo: { type: String },
    active: { type: Boolean },
  },
  { timestamps: true }
);

const OTPSchema = new Schema({
  phoneNo: { type: String },
  OTP: String,
});

export const User = mongoose.model("User", UserSchmea);
export const OTPUser = mongoose.model("OTPUser", OTPSchema);
