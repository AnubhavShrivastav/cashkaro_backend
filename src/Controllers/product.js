import { Product } from "../model/product.schema.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createProduct = async (req, res) => {
  try {
    const { brandInfo, title, productUrl } = req.body;

    const saveProduct = await Product.create({ brandInfo, title, productUrl });

    return res
      .status(201)
      .json(new ApiResponse(201, saveProduct, "product saved successfully"));
  } catch (error) {
    return res.status(400).json(new ApiError(400, "failed to save product"));
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      const product = await Product.aggregate([
        {
          $lookup: {
            from: "brands",
            localField: "brandInfo",
            foreignField: "_id",
            as: "brandDetails",
          },
        },

        { $unwind: "$brandDetails" },
      ]);
      return res
        .status(200)
        .json(new ApiResponse(200, product, "product fetched successfully"));
    } else {
      const product = await Product.find({ brandInfo: id });
      return res
        .status(200)
        .json(new ApiResponse(200, product, "product fetched successfully"));
    }
  } catch (error) {
    res.status(400).json(new ApiError(400, "Failed To Fetched Product"));
  }
};

export { createProduct, getProduct };
