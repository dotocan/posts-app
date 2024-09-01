import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/authProvider";
import { LoginForm } from "../features/auth/LoginForm";

export const HomePage = () => {
  const auth = useAuth();

  return auth?.token ? <Navigate to="/app" /> : <LoginForm />;
};
