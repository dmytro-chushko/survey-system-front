import { Login } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData } from "types/login.types";
import { loginSchema } from "validation-schemas/login-schemas";
import { EmailField } from "../email-field";
import { PasswordField } from "../password-field";
import { useLoginForm } from "./login-form.hook";

export const LoginForm = () => {
  const { onSubmit, isLoading } = useLoginForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" gap={2}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <EmailField field={field} errors={errors} />}
          ></Controller>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordField field={field} errors={errors} />
            )}
          ></Controller>
          <LoadingButton
            type="submit"
            loadingPosition="start"
            variant="contained"
            loading={isLoading}
            startIcon={<Login />}
          >
            Sign in
          </LoadingButton>
        </Grid>
      </form>
    </Box>
  );
};
