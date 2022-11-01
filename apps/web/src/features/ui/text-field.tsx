import clsx from "clsx";
import { JSX } from "preact";
import { forwardRef } from "preact/compat";
import { UseFormRegister } from "react-hook-form";

interface Props
  extends JSX.HTMLAttributes<HTMLInputElement>,
    UseFormRegister<any> {
  rounded?: boolean;
  filled?: boolean;
  bordered?: boolean;
  fullWidth?: boolean;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ rounded, filled, bordered, fullWidth, disabled, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        {...rest}
        className={clsx(
          "py-3 px-4 outline-none focus:border-primary focus:shadow",
          {
            "rounded-full": rounded,
            "rounded-base": !rounded,
            "bg-background": filled,
            "bg-gray-300": disabled,
            "border-base border-gray-300": bordered,
            "w-full": fullWidth,
            "w-max": !fullWidth,
          }
        )}
      />
    );
  }
);

export default TextField;
