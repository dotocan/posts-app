import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./providers/authProvider.tsx";

//  TODO:   <Navigate to="/" replace state={{ from: "location" }} />

export const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth?.token ? (
    <div className="border-4">
      <Outlet />
    </div>
  ) : (
    <div>
      <Navigate to="/" />
    </div>
  );
};
