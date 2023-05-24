import { Login } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData } from "types/login.types";
import { loginSchema } from "validation-schemas/login-form.schema";
import { EmailField } from "../email-field";
import { PasswordField } from "../password-field";
import { useLoginForm } from "./login-form.hook";
import { SubmitButton } from "components/submit-button";
import { ModalWindow } from "components/modal-window";

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
    <Box maxWidth="300px">
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
          <SubmitButton icon={<Login />} isLoading={isLoading}>
            Sign in
          </SubmitButton>
        </Grid>
      </form>

      <ModalWindow isOpen={isLoading}>
        <Typography align="center" mt={2}>
          This application was deploy on render.com service. Web Services on the
          free instance type are automatically spun down after 15 minutes of
          inactivity. When a new request for a free service comes in, Render
          spins it up again so it can process the request.
        </Typography>
        <Typography align="center" fontSize="1.5em" color="red">
          Pease, wait 2-3 minutes
        </Typography>
      </ModalWindow>
    </Box>
  );
};
