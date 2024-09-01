import {
  TypographyProps,
  weightToClassName,
  colorToClassName,
} from "./typography.props";

export const BodyText = ({
  weight,
  color,
  className,
  children,
}: TypographyProps) => {
  return (
    <p
      className={`${weightToClassName(weight)} ${colorToClassName(color)} ${className}`}
    >
      {children}
    </p>
  );
};
