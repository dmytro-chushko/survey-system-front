import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "pages/login";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
