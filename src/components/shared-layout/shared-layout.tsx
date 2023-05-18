import { Button, Container, Grid } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet } from "react-router-dom";
import { useSharedLayout } from "./shared-layout.hook";

export const SharedLayout = () => {
  const { handleLogout } = useSharedLayout();

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="end" py={1}>
        <Button
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Grid>
      <Outlet />
    </Container>
  );
};
