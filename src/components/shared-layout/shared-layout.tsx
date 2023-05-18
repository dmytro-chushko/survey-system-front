import { Box, Button, Container, Grid } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet } from "react-router-dom";
import { useSharedLayout } from "./shared-layout.hook";

export const SharedLayout = () => {
  const { handleLogout, data, isLoading } = useSharedLayout();

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="space-between" py={1}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          item
          xs="auto"
        >
          <Box component="p">
            <Box component="span" fontWeight={700}>
              User:{" "}
            </Box>
            {isLoading ? "...Loading" : data?.email}
          </Box>
          <Box component="p">
            <Box component="span" fontWeight={700}>
              Role:{" "}
            </Box>
            {isLoading ? "...Loading" : data?.role}
          </Box>
        </Grid>
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
