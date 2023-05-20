import { Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSurveyList } from "./survey-list.hook";
import { APP_ROUTE_KEYS } from "utils/consts";

export const SurveyList = () => {
  const { data, isLoading } = useSurveyList();

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      {data &&
        data.map(({ _id, title }) => (
          <Grid key={_id} item xs={6} textAlign="center">
            <Link
              component={RouterLink}
              to={`/${APP_ROUTE_KEYS.SURVEY_LIST}/${_id}`}
            >
              {title}
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};
