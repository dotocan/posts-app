import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./features/auth/authProvider.tsx";
import { Button } from "./components/primitives/buttons/Button.tsx";
import { useEffect } from "react";
import { Navbar } from "./components/blocks/Navbar.tsx";

export const ProtectedRoutes = () => {
  const auth = useAuth();

  useEffect(() => {
    auth?.getToken();
  }, []);

  if (!auth) return null;

  const logout = () => {
    auth?.signOut();
  };

  console.log("token", auth?.token);

  if (auth?.loading) return <div>Loading...</div>;

  //

  return (
    <div className="pb-10 pl-10 pr-10">
      <Navbar
        childrenLeft={<div>SITE NAME</div>}
        childrenRight={<Button text="Log out" onClick={logout} />}
      />
      {auth.token ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
};
