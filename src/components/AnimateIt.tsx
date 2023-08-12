import { ComponentProps, useEffect, useState } from "react";
export type TypingProps = {
  text: string;
  timeToShow: number;
} & ComponentProps<"div">;

function AnimateTyping({ text, timeToShow, ...props }: TypingProps) {
  const [higherIndex, setHigherIndex] = useState(text.length);
  const [lessIndex, setlessIndex] = useState(0);
  const toShow = text.substring(lessIndex, higherIndex);
  useEffect(() => {
    setTimeout(() => {
      if (higherIndex > lessIndex) {
        setHigherIndex(higherIndex - 1);
      }
      if (higherIndex <= lessIndex) setlessIndex(lessIndex + 1);

      if (toShow.length === text.length) {
        setlessIndex(0);
        setHigherIndex(text.length - 1);
      }
    }, timeToShow);
  }, [higherIndex, lessIndex]);
  return (
    <div className="typing" {...props}>
      {toShow}
    </div>
  );
}

export default AnimateTyping;
