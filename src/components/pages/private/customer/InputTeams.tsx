import { forwardRef } from "react";
import { InputTeamsProps } from "./types";
import React from "react";
const InputTeams = forwardRef<HTMLInputElement, InputTeamsProps>(
  (props, ref) => {
    const { label, type, name, id, placeholder = "@myteams", ...rest } = props;
    return (
      <div className="mt-5">
        <label
          htmlFor={id || name}
          className="block text-sm font-medium leading-6 text-dark-400 mb-1"
        >
          {label}
        </label>
        <div className="mt-2 sm:col-span-2 sm:mt-0">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 sm:max-w-md">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              https://teams.microsoft.com/
            </span>
            <input
              {...rest}
              ref={ref}
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-dark-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    );
  }
);

InputTeams.displayName = "InputTeams";
export default InputTeams;
