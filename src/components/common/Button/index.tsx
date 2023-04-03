import { ButtonProps } from "./types";
import classNames from "classnames";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { type, color = "primary", children, ...rest } = props;
  return (
    <div>
      <button
        {...rest}
        ref={ref}
        type={type}
        className={classNames(
          color === "primary" &&
            "bg-primary-500 hover:bg-primary-400 focus-visible:outline-primary-500",
          color === "coral" &&
            "bg-red-500 hover:bg-red-400 focus-visible:outline-red-500",
          color === "success" &&
            "bg-green-500 hover:bg-green-400 focus-visible:outline-green-500",
          color === "dark" &&
            "bg-dark-500 hover:bg-dark-400 focus-visible:outline-dark-500",
          "flex w-full justify-center rounded-md text-white py-2 px-3 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        )}
      >
        {children}
      </button>
    </div>
  );
});

Button.displayName = "Button";

export default Button;
