import * as yup from "yup";

export const FlashdealValidationSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .trim()
    .min(8, "title must be at least 8 Characters")
    .max(100, "title must be at most 50 characters"),
  imageUrl: yup.string().url().required("Image Url is required").trim(),
  brandLogo: yup.string().url().required("brandLogo Url is required").trim(),
});
