import { Outlet } from "react-router-dom";
import { MessageProps } from "./shared/message.props";
import { withLogger } from "./shared/loggerHoc";

export const RootLayout = (_: MessageProps) => {
  return (
    <div className="p-10">
      <Outlet />
    </div>
  );
};

export default withLogger(RootLayout);
