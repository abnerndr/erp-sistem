import React, { forwardRef } from "react";
import { InputUrlProps } from "./types";

const InputUrl = forwardRef<HTMLInputElement, InputUrlProps>((props, ref) => {
  const {
    label,
    type,
    name,
    id,
    urlLocal,
    placeholder = "www.example.com",
    ...rest
  } = props;
  return (
    <div className="mt-5">
      <label
        htmlFor={name || id}
        className="block text-sm font-medium leading-6 text-dark-400"
      >
        {label}
      </label>
      <div className="mt-1">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 ">
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            {urlLocal ? "http://" : "https://"}
          </span>
          <input
            {...rest}
            ref={ref}
            type={type}
            name={name}
            id={id}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-dark-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
});

InputUrl.displayName = "InputUrl";

export default InputUrl;
