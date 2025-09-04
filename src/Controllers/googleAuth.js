import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../model/user.schema.js";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const client = new OAuth2Client(process.env.CLIENT_ID);
console.log(`CLIENTIDFROM.ENV: ${process.env.CLIENT_ID}`);
console.log(`OAUTH2CLIENT: ${client._clientId}`);

const createGoogleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(`Token: ${token}`);

    // 1. Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    console.log(`Ticket: ${ticket.getUserId()}`);

    const payload = ticket.getPayload();
    console.log(`payLoad: ${payload.given_name}`);
    // 2. Extract user info
    const { sub, email, name, picture } = payload;

    // 3. Save user in DB (upsert)
    let user = await User.findOne({ googleId: sub });
    if (!user) {
      user = await User.create({
        googleId: sub,
        email,
        name,
        picture,
      });
    }

    // 4. Create our own JWT
    const myToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.CLIENT_SECRET,
      { expiresIn: "1h" }
    );

    // 5. Send response
    res.json({
      message: "Login successful",
      token: myToken,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Google Login Error:", err);
    res.status(400).json({ error: "Invalid Google token" });
  }
};

const getGoogleAuth = async (req, res) => {
  try {
    const userData = await User.find();
    return res
      .status(201)
      .json(new ApiResponse(201, userData, "User Fetched SuccessFully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Failed To Fetched The User"));
  }
};

export { createGoogleAuth, getGoogleAuth };
