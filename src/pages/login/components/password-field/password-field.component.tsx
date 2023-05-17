import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";
import { LoginFormData } from "types/login.types";

interface IPasswordField {
  field: ControllerRenderProps<LoginFormData, "password">;
  errors: FieldErrors<LoginFormData>;
}

export const PasswordField: React.FC<IPasswordField> = ({ field, errors }) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleClickShowPass = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <TextField
      {...field}
      label="Password"
      type={showPass ? "text" : "password"}
      variant="outlined"
      size="small"
      placeholder="Input your password"
      error={!!errors?.password}
      helperText={errors?.password ? errors?.password?.message : null}
      InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
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
  );
};
