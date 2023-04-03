import { forwardRef, useState } from "react";
import {
  EyeSlashIcon,
  EyeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { InputProps } from "./types";
import classNames from "classnames";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    type,
    value,
    disabled,
    id,
    name,
    placeholder,
    error,
    ...rest
  } = props;

  const [display, setDisplay] = useState<boolean>(false);
  const handleDisplayPass = () => {
    setDisplay(!display);
  };

  const inputType = display === false ? type : "text";
  return (
    <div className="mt-5">
      <label
        htmlFor={name || id}
        className="block text-sm font-medium leading-6 text-dark-400"
      >
        {label}
      </label>
      <div className="relative rounded-md shadow-sm mt-1">
        <input
          {...rest}
          ref={ref}
          id={id}
          name={name}
          defaultValue={value}
          type={inputType}
          disabled={disabled}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 text-dark-500 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        />
        {type === "password" ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center ml-4">
            <button
              type="button"
              onClick={handleDisplayPass}
              className="cursor-pointer"
            >
              {(!display && (
                <EyeSlashIcon className="w-5 h-5 text-primary-500" />
              )) || <EyeIcon className="w-5 h-5 text-primary-500" />}
            </button>
          </div>
        ) : null}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
