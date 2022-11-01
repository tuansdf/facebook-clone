import clsx from "clsx";

interface Props {
  children?: string;
  filled?: boolean;
  fullWidth?: boolean;
  color?: "secondary";
  disabled?: boolean;
}

export default function Button({
  children,
  filled,
  fullWidth,
  color,
  disabled,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "rounded-base py-2.5 px-4 text-lg font-semibold transition-colors",
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
      {children}
    </button>
  );
}
