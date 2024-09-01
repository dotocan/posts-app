import { ReactNode } from "react";

export type TypographyWeight = "light" | "medium" | "bold";
export type TypographyColor = "normal" | "faded" | "danger";

export interface TypographyProps {
  weight?: TypographyWeight;
  color?: TypographyColor;
  className?: string;
  children: ReactNode;
}

export const weightToClassName = (weight?: TypographyWeight): string => {
  if (!weight) return ``;

  if (weight === "light") return "font-light";
  if (weight === "medium") return "font-medium";
  if (weight === "bold") return "font-bold";

  return "";
};

export const colorToClassName = (color?: TypographyColor): string => {
  if (!color) return "text-gray-900";
  if (color === "faded") return "text-gray-500";
  if (color === "danger") return "text-red-600";

  return "text-gray-900";
};
