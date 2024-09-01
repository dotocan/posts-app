import { withLogger } from "../../../shared/loggerHoc";
import {
    colorToClassName,
    TypographyProps,
    weightToClassName,
  } from "./typography.props";
  
  export const Heading1 = ({
    weight,
    color,
    className,
    children,
  }: TypographyProps) => {
    return (
      <h1
        className={`text-4xl ${weightToClassName(weight)} ${colorToClassName(color)} ${className}`}
      >
        {children}
      </h1>
    );
  };

  export default withLogger(Heading1);