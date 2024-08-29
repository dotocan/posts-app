import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./providers/authProvider.tsx";

export const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth?.token ? <Outlet /> : <Navigate to="/" />;
};
