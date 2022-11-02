import clsx from "clsx";
import { JSX } from "preact";
import { forwardRef } from "preact/compat";
import { UseFormRegister } from "react-hook-form";

interface Props
  extends JSX.HTMLAttributes<HTMLInputElement>,
    UseFormRegister<any> {
  pill?: boolean;
  filled?: boolean;
  bordered?: boolean;
  fullWidth?: boolean;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ pill, filled, bordered, fullWidth, disabled, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        {...rest}
        className={clsx("py-3  focus:border-primary focus:shadow", {
          "rounded-full px-6": pill,
          "rounded-base px-4": !pill,
          "bg-background": filled,
          "bg-gray-300": disabled,
          "border-base border-gray-300": bordered,
          "w-full": fullWidth,
          "w-max": !fullWidth,
        })}
      />
    );
  }
);

export default TextField;
