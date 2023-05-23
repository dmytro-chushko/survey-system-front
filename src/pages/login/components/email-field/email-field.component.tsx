import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";
import { LoginFormData } from "types/login.types";

interface IEmailField {
  field: ControllerRenderProps<LoginFormData, "email">;
  errors: FieldErrors<LoginFormData>;
}

export const EmailField: React.FC<IEmailField> = ({ field, errors }) => (
  <TextField
    {...field}
    label="Email"
    type="email"
    variant="outlined"
    size="small"
    placeholder="Input your email"
    error={!!errors?.email}
    helperText={errors?.email ? errors?.email?.message : null}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    }}
  />
);
