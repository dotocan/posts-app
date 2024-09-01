import { withLogger } from "../../../shared/loggerHoc";
import {
  colorToClassName,
  TypographyProps,
  weightToClassName,
} from "./typography.props";

export const Heading2 = ({
  weight,
  color,
  className,
  children,
}: TypographyProps) => {
  return (
    <h2
      className={`text-2xl ${weightToClassName(weight)} ${colorToClassName(color)} ${className}`}
    >
      {children}
    </h2>
  );
};

export default withLogger(Heading2);
