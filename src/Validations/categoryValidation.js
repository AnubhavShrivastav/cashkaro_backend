import * as yup from "yup";

export const categoryValidationSchema = yup.object({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 Characters")
    .max(50, "name must be at most 50 characters"),
  imageUrl: yup.string().url().required("Image Url is required").trim(),
});
