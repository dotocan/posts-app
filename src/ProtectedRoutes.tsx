import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./features/auth/authProvider.tsx";

export const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth?.token ? <Outlet /> : <Navigate to="/" />;
};
