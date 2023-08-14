import { ComponentProps } from "react";

export { default as AnimateIt } from "./AnimateIt";
export type TypingProps = {
  text: string;
  timeToShow: number;
} & ComponentProps<"div">;

import "./index.css";
