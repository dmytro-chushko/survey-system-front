import { Box, Grid } from "@mui/material";
import { LoginForm } from "./components/login-form";

export const Login = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Box sx={{ maxWidth: "600px" }}>
        <LoginForm />
      </Box>
    </Grid>
  );
};
