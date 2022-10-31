import clsx from "clsx";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  width?: string;
  bordered?: boolean;
}
export default function Card({ children, width, bordered }: Props) {
  return (
    <div
      className={clsx("flex flex-col rounded-base bg-white p-4 shadow-lg", {
        "border-base": bordered,
      })}
      style={width ? { width } : undefined}
    >
      {children}
    </div>
  );
}
