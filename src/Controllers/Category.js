import { productCategory } from "../model/category.schema.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createCategory = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const category = await productCategory.create({ name, imageUrl });
    return res
      .status(201)
      .json(new ApiResponse(201, category, "Category Saved SuccessFully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Failed to save the Category"));
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await productCategory.find();
    return res
      .status(201)
      .json(new ApiResponse(201, category, "Category Fetched SuccessFully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Failed to Fetched the Category"));
  }
};

export { createCategory, getCategory };
