import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
  field: string;
  placeholder?: string;
  rounded?: boolean;
  filled?: boolean;
  bordered?: boolean;
  type?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function TextField({
  register,
  field,
  rounded,
  filled,
  bordered,
  placeholder,
  fullWidth,
  disabled,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...register(field)}
      className={clsx(
        "py-2.5 px-4 outline-none focus:border-primary focus:shadow",
        {
          "rounded-full": rounded,
          "rounded-base": !rounded,
          "bg-background": filled,
          "bg-gray-300": disabled,
          "border-base border-gray-200": bordered,
          "w-full": fullWidth,
          "w-max": !fullWidth,
        }
      )}
    />
  );
}
