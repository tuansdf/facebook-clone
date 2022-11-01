import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { ComponentChildren } from "preact";

interface Props {
  children?: ComponentChildren;
  filled?: boolean;
  fullWidth?: boolean;
  color?: "secondary";
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Button({
  children,
  filled,
  fullWidth,
  color,
  disabled,
  isLoading,
}: Props) {
  return (
    <button
      disabled={disabled}
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
