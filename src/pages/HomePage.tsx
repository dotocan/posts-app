import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/authProvider";
import LoginForm from "../features/auth/LoginForm";
import { logMessage } from "../shared/constants";
import { MessageProps } from "../shared/message.props";
import { withLogger } from "../shared/loggerHoc";

export const HomePage = (_: MessageProps) => {
  const auth = useAuth();

  if (auth?.token) return <Navigate to="/app" replace={true}/>;

  return <LoginForm message={logMessage} />;
};

export default withLogger(HomePage);
