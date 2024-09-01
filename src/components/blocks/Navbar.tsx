import { ReactNode } from "react";
import { MessageProps } from "../../shared/message.props";
import { withLogger } from "../../shared/loggerHoc";

interface Props extends MessageProps {
  childrenLeft: ReactNode;
  childrenRight?: ReactNode;
}

export const Navbar = ({ childrenLeft, childrenRight }: Props) => {
  return (
    <nav className="border-b-gray-500 border-b-2 mb-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {childrenLeft}
          </div>
          <div className="relative ml-3">{childrenRight}</div>
        </div>
      </div>
    </nav>
  );
};

export default withLogger(Navbar);
