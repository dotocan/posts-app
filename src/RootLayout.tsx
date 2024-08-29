import { Outlet } from "react-router-dom";

// TODO: after storing token in localstorage, check if it's there and if it is, redirect to /app to 
//  skip useless login process
export const RootLayout = () => {
  return (
    <div className="p-10">
      <Outlet />
    </div>
  );
};
