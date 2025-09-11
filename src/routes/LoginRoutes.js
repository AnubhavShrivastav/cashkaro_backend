import express from "express";
import { validateData } from "../middleware/validateMiddleware.js";
import { createGoogleAuth, getGoogleAuth } from "../Controllers/googleAuth.js";
import { sendOTP, verifyOTP, getOtpUser } from "../Controllers/OTPLogin.js";
import { otpValidationSchema, loginValidationSchema } from "../Validations/loginValidation.js";

const login = express.Router();

login.post("/auth/google", validateData(loginValidationSchema), createGoogleAuth);
login.get("/auth/google", getGoogleAuth);
login.post("/auth/phone", validateData(loginValidationSchema), sendOTP);
login.post("/auth/verifyotp", validateData(otpValidationSchema), verifyOTP);
login.get("/auth/otp", getOtpUser)

export default login;
