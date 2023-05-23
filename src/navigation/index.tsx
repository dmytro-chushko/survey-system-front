import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "pages/login";
import { SurveyList } from "pages/survey-list";
import { ProtectedRoute, PublicRoute } from "./protected-route";
import { APP_ROUTE_KEYS } from "utils/consts";
import { Survey } from "pages/survey";

export const MainRouter = () => (
  <BrowserRouter basename="/survey-system-front">
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path={APP_ROUTE_KEYS.SURVEY_LIST} element={<SurveyList />} />
        <Route
          path={`${APP_ROUTE_KEYS.SURVEY_LIST}/:id`}
          element={<Survey />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
