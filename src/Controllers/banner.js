import { Banner } from "../model/banner.schema.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

//Post API For Banner
const createBanner = async (req, res) => {
  try {
    const { brandName, title, imageUrl } = req.body;

    const product = await Banner.create({ brandName, title, imageUrl });

    return res
      .status(201)
      .json(new ApiResponse(201, product, "Banner Saved SuccessFully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Failed To Save The Product"));
  }
};

//Get API for Banner

const getBanner = async (req, res) => {
  try {
    const product = await Banner.find();
    return res
      .status(201)
      .json(new ApiResponse(201, product, "Banner Fetched SuccessFully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Failed To Fetched The Product"));
  }
};

export { createBanner, getBanner };
