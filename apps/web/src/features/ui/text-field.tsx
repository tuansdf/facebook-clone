import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
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
  isError?: boolean;
  short?: boolean;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  (
    { pill, filled, short, isError, bordered, fullWidth, disabled, ...rest },
    ref
  ) => {
    return (
      <div className="relative w-full items-center justify-end">
        <input
          ref={ref}
          {...rest}
          className={clsx("focus:border-primary focus:shadow", {
            "rounded-full px-6": pill,
            "rounded-base px-4": !pill,
            "py-2.5 text-sm": short,
            "py-3": !short,
            "bg-background": filled,
            "bg-gray-300": disabled,
            "border-base border-gray-300": bordered && !isError,
            "border-base border-error": isError,
            "w-full": fullWidth,
            "w-max": !fullWidth,
          })}
        />
        {isError ? (
          <ExclamationCircleIcon className="absolute mr-2 h-6 w-6 fill-error" />
        ) : null}
      </div>
    );
  }
);

export default TextField;
