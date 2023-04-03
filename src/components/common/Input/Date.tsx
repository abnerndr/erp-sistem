import { forwardRef } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { InputDateProps } from "./types";

const Date = forwardRef<HTMLInputElement, InputDateProps>((props, ref) => {
  const { label, type = "date", id, name, placeholder, error, ...rest } = props;

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
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 text-dark-500 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
        />
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

Date.displayName = "InputDate";

export default Date;
