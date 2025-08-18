import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Brands } from "../model/brands.schema.js";

const createBrands = async (req, res) => {
  try {
    const { Brandname, BrandLogo, descripition } = req.body;
    const brands = await Brands.create({ Brandname, BrandLogo, descripition });
    return res
      .status(201)
      .json(new ApiResponse(201, brands, "Brands added Successfully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Failed to saved the brands"));
  }
};

const getBrands = async (req, res) => {
  try {
    const brands = await Brands.find();
    res
      .status(201)
      .json(new ApiResponse(201, brands, "brands Fetched Successfully"));
  } catch (error) {
    res.status(400).json(new ApiError(400, "Failed to fetch the brands"));
  }
};

export { createBrands, getBrands };
