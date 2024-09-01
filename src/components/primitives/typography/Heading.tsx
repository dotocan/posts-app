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
