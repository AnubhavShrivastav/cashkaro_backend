import { createGoogleAuth, getGoogleAuth } from "../Controllers/googleAuth.js";
import express from "express";

const Login = express.Router();

Login.post("/auth/google", createGoogleAuth);
Login.get("/auth/google", getGoogleAuth)

export default Login;
