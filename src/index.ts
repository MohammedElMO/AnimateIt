import { ComponentProps } from "react";

export { default as AnimateIt } from "./components/AnimateIt";
export type TypingProps = {
  text: string;
  timeToShow: number;
} & ComponentProps<"div">;
