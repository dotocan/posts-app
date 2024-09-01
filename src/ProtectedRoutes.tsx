import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./features/auth/authProvider.tsx";

export const ProtectedRoutes = () => {
  const auth = useAuth();

  return (
    <div className="p-10">{auth?.token ? <Outlet /> : <Navigate to="/" />}</div>
  );
};
