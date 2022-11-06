import clsx from "clsx";
import { JSX, VNode } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  Icon: VNode;
  filled?: boolean;
}

export default function IconButton({ Icon, filled, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={clsx("aspect-square rounded-full transition-colors", {
        "bg-gray-200 p-3 hover:bg-gray-300": filled,
        "p-1 hover:bg-gray-200": !filled,
      })}
    >
      {Icon}
    </button>
  );
}
