import { Outlet } from "react-router-dom";
import { useAuth } from "./providers/authProvider.tsx";

export const RootLayout = () => {
  const auth = useAuth();

  const authBorder = auth?.token ? "border-green-500 " : "border-red-500";

  return (
    <div className={`p-10 border-4 ${authBorder}`}>
      <Outlet />
    </div>
  );
};
