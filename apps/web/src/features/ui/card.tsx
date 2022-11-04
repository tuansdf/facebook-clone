import clsx from "clsx";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  width?: string;
  bordered?: boolean;
  className?: string;
}
export default function Card({ children, width, bordered, className }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-base bg-white p-4 shadow-lg",
        {
          "border-base": bordered,
          "w-full": width === undefined,
        },
        className
      )}
      style={width ? { width } : undefined}
    >
      {children}
    </div>
  );
}
