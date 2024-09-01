import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./features/auth/authProvider.tsx";
import Button from "./components/primitives/buttons/Button.tsx";import Navbar from "./components/blocks/Navbar.tsx";
import { logMessage } from "./shared/constants.ts";
import { MessageProps } from "./shared/message.props.ts";
import { withLogger } from "./shared/loggerHoc.tsx";

export const ProtectedRoutes = (_: MessageProps) => {
  const auth = useAuth();

  if (!auth) return null;

  const logout = () => {
    auth?.signOut();
  };

  if (auth?.loading) return <div>Loading...</div>;

  return (
    <div className="pb-10 pl-10 pr-10">
      <Navbar
        childrenLeft={<div>SITE NAME</div>}
        childrenRight={<Button message={logMessage} text="Log out" onClick={logout} />}
        message={logMessage}
      />
      {auth.token ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
};

export default withLogger(ProtectedRoutes);