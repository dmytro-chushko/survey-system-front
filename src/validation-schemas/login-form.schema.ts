import { object, string } from "yup";

export const loginSchema = object({
  email: string().email("email must be valid").required("email is required"),
  password: string().required("password is required"),
});
