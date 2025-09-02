import { googleAuth } from "../Controllers/googleAuth.js";
import express from "express";

const Login = express.Router();

Login.post("/auth/google", googleAuth);

export default Login;
