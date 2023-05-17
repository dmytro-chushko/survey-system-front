import { InferType } from "yup";
import { loginSchema } from "validation-schemas/login-schemas";

export type LoginFormData = InferType<typeof loginSchema>;
