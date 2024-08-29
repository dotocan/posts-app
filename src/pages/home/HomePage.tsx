import { LoginForm } from "./LoginForm";
import { useAuth } from "../../providers/authProvider.tsx";
import { Navigate } from "react-router-dom";

export const HomePage = () => {
  const auth = useAuth();

  return auth?.token ? <Navigate to="/app" /> : <LoginForm />;
};
