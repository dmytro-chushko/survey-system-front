import {
  AccountCircle,
  Login,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IFormData } from "types/login.types";

export const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => console.log(data);

  const handleClickShowPass = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" gap={2}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                placeholder="Input your email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          ></Controller>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type={showPass ? "text" : "password"}
                variant="outlined"
                size="small"
                placeholder="Input your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPass}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          ></Controller>
          <LoadingButton
            type="submit"
            loadingPosition="start"
            variant="contained"
            loading={false}
            startIcon={<Login />}
          >
            Sign in
          </LoadingButton>
        </Grid>
      </form>
    </Box>
  );
};
