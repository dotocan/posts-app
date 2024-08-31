import { Navigate } from "react-router-dom";
import { useAuth } from "../../features/auth/authProvider.tsx";
import { LoginForm } from "../../features/auth/LoginForm.tsx";

export const HomePage = () => {
  const auth = useAuth();

  return auth?.token ? <Navigate to="/app" /> : <LoginForm />;
};
