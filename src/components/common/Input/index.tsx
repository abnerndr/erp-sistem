import { forwardRef, useState } from "react";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, type, id, name, placeholder, error, ...restProps } = props;

  const [display, setDisplay] = useState<boolean>(false);
  const handleDisplayPass = () => {
    setDisplay(!display);
  };

  const inputType = display === false ? type : "text";
  return (
    <div>
      <label
        htmlFor={name || id}
        className="block text-sm font-medium leading-6 text-dark-400"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
