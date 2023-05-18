import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "pages/login";
import { SurveyList } from "pages/survey-list";
import { SurveyTable } from "pages/survey-table";
import { ProtectedRoute, PublicRoute } from "./protected-rout";
import { ROLE } from "types/redux.types";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute role={ROLE.GUEST} path="check-survey" />}>
        <Route path="take-survey" element={<SurveyList />} />
      </Route>
      <Route element={<ProtectedRoute role={ROLE.ADMIN} path="take-survey" />}>
        <Route path="check-survey" element={<SurveyTable />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
