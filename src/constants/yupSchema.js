import * as yup from "yup";

export const apologyValidationSchema = yup.object().shape({
  message: yup
    .string()
    .required("Message is required")
    .min(5, "5 characters min.")
    .max(255, "255 characters max.")
    .trim(),
  apologyTag: yup.object().shape({
    label: yup.string().max(255, "255 characters max.").nullable(false),
  }),
});
