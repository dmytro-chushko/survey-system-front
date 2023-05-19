import { SharedLayout } from "components/shared-layout";
import { Navigate, Outlet } from "react-router-dom";
import { useGetUserData } from "redux/hooks";
import { ROLE } from "types/login.types";

interface IProtectedRoute {
  role: ROLE;
  path: string;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ role, path }) => {
  const { token, role: userRole } = useGetUserData();

  if (token) {
    return role === userRole ? (
      <SharedLayout />
    ) : (
      <Navigate to={path} replace />
    );
  } else {
    return <Navigate to="/" replace />;
  }
};

export const PublicRoute = () => {
  return !useGetUserData().token ? (
    <Outlet />
  ) : (
    <Navigate to="survey-results" replace />
  );
};
