import { flashDeal } from "../model/flashDeal.schema.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createFlashDeal = async (req, res) => {
  try {
    const { title, imageUrl, brandLogo } = req.body;
    const product = await flashDeal.create({
      title,
      imageUrl,
      brandLogo,
    });
    return res
      .status(201)
      .json(
        new ApiResponse(201, product, "FlashDeal Product Saved SuccessFully")
      );
  } catch (error) {
    return res
      .status(401)
      .json(new ApiError(400, "Failed to save the Flashdeal"));
  }
};

const getFlashDeal = async (req, res) => {
  try {
    const product = await flashDeal.find();
    return res
      .status(201)
      .json(
        new ApiResponse(201, product, "FlashDeal Product Fetched SuccessFully")
      );
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Failed To Fetched the Flashdeal"));
  }
};

export { createFlashDeal, getFlashDeal };
