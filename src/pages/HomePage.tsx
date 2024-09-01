import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/authProvider";
import { LoginForm } from "../features/auth/LoginForm";

export const HomePage = () => {
  const auth = useAuth();

  if (auth?.token) return <Navigate to="/app" />;

  return <LoginForm />;
};
