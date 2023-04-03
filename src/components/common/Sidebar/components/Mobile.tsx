import { Disclosure } from "@headlessui/react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { MobileProps } from "./types";

function Mobile({ navigation, activeNav, teams, logo }: MobileProps) {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
      <div className="flex h-16 shrink-0 items-center">
        <img className="h-8 w-auto" src={logo.src} alt="Your Company" />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) =>
                (!item.children && item.module) || item.permissions ? (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.name === activeNav
                          ? "text-primary-700"
                          : "bg-gray-900 text-gray-200 hover:bg-gray-800 hover:text-gray-300",
                        "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.name === activeNav
                            ? "text-primary-700"
                            : "text-gray-50 group-hover:text-gray-200",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </div>
                ) : item.module ? (
                  <Disclosure as="div" key={item.name} className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            item.name === activeNav
                              ? "bg-gray-900 text-gray-200"
                              : "bg-gray-900 text-gray-200 hover:bg-gray-800 hover:text-gray-300",
                            "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none  focus:ring-gray-200"
                          )}
                        >
                          <item.icon
                            className="mr-3 flex-shrink-0 h-6 w-6 text-gray-50 group-hover:text-gray-200"
                            aria-hidden="true"
                          />
                          <span className="flex-1">{item.name}</span>
                          <svg
                            className={classNames(
                              open ? "text-gray-50 rotate-90" : "text-gray-50",
                              "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150"
                            )}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {item.children.map(
                            (subItem: {
                              name: string;
                              href: string;
                              permissions?: any[] | undefined;
                            }) =>
                              subItem.permissions && (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-gray-400 hover:bg-gray-800"
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              )
                          )}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : null
              )}
              {/* {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))} */}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <div className="bg-gray-900 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <span className="relative inline-block">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={team.imageUrl}
                        alt=""
                      />
                      <span
                        className={classNames(
                          team.status === "on" && "bg-green-400",
                          team.status === "off" && "bg-gray-700",
                          team.status === "notdisturb" && "bg-red-500",
                          team.status === "busy" && "bg-yellow-400",
                          "absolute top-0 right-0 block h-2.5 w-2.5 rounded-full  ring-2 ring-white"
                        )}
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="truncate -mb-1">{team.name}</span>
                      <span className="truncate rounded-xl text-gray-400 lowercase text-[11.5px]">
                        {team.office}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Mobile;
