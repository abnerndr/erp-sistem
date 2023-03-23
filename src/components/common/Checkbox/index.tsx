import { forwardRef } from "react";
import { CheckboxProps } from "./types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { name, id, type = "checkbox", label, ...rest } = props;
  return (
    <div className="flex items-center">
      <input
        {...rest}
        ref={ref}
        id={id}
        name={name}
        type={type}
        className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-dark-300">
        {label}
      </label>
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
