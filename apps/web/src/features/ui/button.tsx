import { ArrowPathIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ComponentChildren, JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  children?: ComponentChildren;
  filled?: boolean;
  fullWidth?: boolean;
  color?: "secondary";
  isLoading?: boolean;
  short?: boolean;
  wide?: boolean;
}

export default function Button({
  children,
  filled,
  fullWidth,
  color,
  isLoading,
  disabled,
  short,
  wide,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-base text-lg font-semibold transition-colors",
        {
          "bg-primary text-primary-content hover:bg-primary-focus":
            !disabled && filled && color !== "secondary",
          "bg-secondary text-secondary-content hover:bg-secondary-focus":
            !disabled && filled && color === "secondary",
          "text-primary": !disabled && !filled,
          "py-2.5": !short,
          "py-1.5": short,
          "px-4": !wide,
          "px-16": wide,
          "w-full": fullWidth,
          "w-max": !fullWidth,
          "bg-gray-300 text-gray-500": disabled,
        }
      )}
    >
      {isLoading ? (
        <ArrowPathIcon
          className={clsx("animate-spin", {
            "h-6 w-6": !short,
            "h-5 w-5": short,
          })}
        />
      ) : null}
      {children}
    </button>
  );
}
