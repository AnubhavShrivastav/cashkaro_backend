import { ApiError } from "../utils/ApiError.js";

export const validateData = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res
      .status(401)
      .json(new ApiError(401, "Please Enter the data Properly", error.errors));
  }
};
