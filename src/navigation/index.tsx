import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "pages/login";
import { SurveyList } from "pages/survey-list";
import { SurveyTable } from "pages/survey-table";
import { ProtectedRoute, PublicRoute } from "./protected-rout";
import { APP_ROUTE_KEYS } from "utils/consts";
import { ROLE } from "types/login.types";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route
        element={
          <ProtectedRoute
            role={ROLE.GUEST}
            path={APP_ROUTE_KEYS.SURVEY_RESULTS}
          />
        }
      >
        <Route path={APP_ROUTE_KEYS.SURVEY_LIST} element={<SurveyList />} />
      </Route>
      <Route
        element={
          <ProtectedRoute role={ROLE.ADMIN} path={APP_ROUTE_KEYS.SURVEY_LIST} />
        }
      >
        <Route path={APP_ROUTE_KEYS.SURVEY_RESULTS} element={<SurveyTable />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
