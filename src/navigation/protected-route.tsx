import { SharedLayout } from "components/shared-layout";
import { Navigate, Outlet } from "react-router-dom";
import { useGetUserData } from "redux/hooks";

export const PublicRoute = () => {
  return !useGetUserData().token ? (
    <Outlet />
  ) : (
    <Navigate to="survey-list" replace />
  );
};

export const ProtectedRoute = () => {
  return useGetUserData().token ? (
    <SharedLayout />
  ) : (
    <Navigate to="/" replace />
  );
};
