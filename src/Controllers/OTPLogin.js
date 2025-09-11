import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { OTPUser, User } from "../model/user.schema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const generateOTP = () => {
  const otp = Math.floor(Math.random() * 9000) + 1000;
  return String(otp);
};

const sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;
    console.log(req.body);

    let user = await User.findOne({ contactNo: String(phone) });
    console.log("result of findone: ", user);

    if (!user) {
      user = await User.create({
        authProvider: "Phone",
        contactNo: phone,
        active: false,
      });

      const userOtp = await OTPUser.create({
        phoneNo: phone,
        OTP: generateOTP(),
      });
      return res
        .status(200)
        .json(new ApiResponse(200, { user, userOtp }, "otp Send Successfully"));
    } else {
      const otpuser = await OTPUser.findOne({ phoneNo: phone });
      otpuser.OTP = generateOTP();
      await otpuser.save();
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            { user, otpuser },
            "User already exist and otp send successfully"
          )
        );
    }
  } catch (error) {
    return res.status(400).json(new ApiError(400, "Failed to send otp"));
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    console.log(req.body);

    const user = await OTPUser.findOne({ phoneNo: phone });
    console.log("After Findone:", user);

    if (!user) {
      return res.status(400).json(new ApiResponse(201, "User does not exist"));
    }

    const userotp = user.OTP;
    console.log("userOTPFromDB:", userotp);

    if (userotp != otp) {
      return res.status(400).json(new ApiResponse(202, "OTP does not match"));
    }

    const userInfo = await User.findOne({ contactNo: phone });
    userInfo.active = true;
    await userInfo.save();

    const mytoken = jwt.sign({ user }, process.env.CLIENT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { user, userInfo, mytoken },
          "OTP Match Successfully"
        )
      );
  } catch (error) {
    return res.status(400).json(new ApiError(400, "Something Went Wrong"));
  }
};

const getOtpUser = async (_req, res) => {
  try {
    const userData = await OTPUser.find();
    return res
      .status(200)
      .json(new ApiResponse(200, userData, "User Fetched successfully"));
  } catch (error) {
    return res.status(400).json(new ApiError(400, "Failed To Fetch The User"));
  }
};

export { sendOTP, verifyOTP, getOtpUser };

/**
 *
 * USER
 *
 * active false
 *
 * OTP
 * userid
 * otp
 *
 *
 * generate otp -> check if number exists -> if not create user with mobile and active as false -> create OTP with same number
 * verify otp -> check if number exists -> check if otp is valid and response with token
 *
 */
