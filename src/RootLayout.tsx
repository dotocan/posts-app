import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="p-10">
      <Outlet />
    </div>
  );
};
