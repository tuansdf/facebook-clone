import { ArrowPathIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ComponentChildren, JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  children?: ComponentChildren;
  filled?: boolean;
  fullWidth?: boolean;
  color?: "secondary";
  isLoading?: boolean;
}

export default function Button({
  children,
  filled,
  fullWidth,
  color,
  isLoading,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-base py-2.5 px-4 text-lg font-semibold transition-colors",
        {
          "bg-primary text-primary-content hover:bg-primary-focus":
            !disabled && filled && color !== "secondary",
          "bg-secondary text-secondary-content hover:bg-secondary-focus":
            !disabled && filled && color === "secondary",
          "text-primary": !disabled && !filled,
          "w-full": fullWidth,
          "w-max": !fullWidth,
          "bg-gray-300 text-gray-500": disabled,
        }
      )}
    >
      {isLoading ? <ArrowPathIcon className="h-6 w-6 animate-spin" /> : null}
      {children}
    </button>
  );
}
