import { UserCircleIcon } from "@heroicons/react/24/solid";
import { forwardRef } from "react";
import { AvatarProps } from "./types";

const Avatar = forwardRef<HTMLInputElement, AvatarProps>((props, ref) => {
  const { label, id = "photo", errors, fileUrl, buttonTitle, ...rest } = props;
  return (
    <div className="col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-dark-400"
      >
        {label}
      </label>
      <div className="mt-2 flex items-center gap-x-3">
        <UserCircleIcon
          className="h-32 w-32 text-gray-300"
          aria-hidden="true"
        />
        {/* <input
          {...rest}
          ref={ref}
          id={id}
          type="file"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        /> */}

        <div className="flex flex-col w-full">
          <input
            className="block w-full h-20 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          {/* <button onClick={() => getFile()}></button> */}
        </div>
      </div>
    </div>
  );
});

Avatar.displayName = "Avatar";
export default Avatar;
