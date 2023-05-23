import { Box, Button, Container, Grid } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useSharedLayout } from "./shared-layout.hook";
import { APP_ROUTE_KEYS } from "utils/consts";

export const SharedLayout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        <Grid container item xs="auto" gap={2}>
          {id && (
            <Button
              variant="contained"
              onClick={() => navigate(`/${APP_ROUTE_KEYS.SURVEY_LIST}`)}
            >
              Back to the survey list
            </Button>
          )}
          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
      <Outlet />
    </Container>
  );
};
