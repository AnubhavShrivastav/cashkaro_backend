import * as yup from "yup";

export const loginValidationSchema = yup.object({
  googleId: yup.string().trim(),
  email: yup.string().email().trim(),
  name: yup.string().trim(),
  picture: yup.string().url().trim(),
  authProvider: yup.string().trim(),
  contactNo: yup
    .string()
    .min(10, "contactNo must be at least 10 Characters")
    .trim(),
  active: yup.boolean(),
});

export const otpValidationSchema = yup.object({
  phoneNo: yup
    .string()
    .min(10, "min 10 characters is required")
    .trim(),
  OTP: yup
    .string()
    .max(4, "maximum 4 characters")
    .trim(),
});
