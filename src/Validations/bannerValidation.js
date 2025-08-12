import * as yup from "yup";

export const bannerValidationSchema = yup.object({
  brandName: yup
    .string()
    .required("BrandName is required")
    .min(2, "brandName must be at least 2 Characters")
    .max(50, "Brand name must be at most 50 characters"),
  title: yup
    .string()
    .required("Title is required")
    .trim()
    .min(8, "title must be at least 8 Characters")
    .max(100, "title must be at most 50 characters"),
  imageUrl: yup.string().url().required("Image Url is required").trim(),
});
