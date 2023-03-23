import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { LargeScreenProps } from "./types";

function LargeScreen({ navigation, teams, logo }: LargeScreenProps) {
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-14 w-auto" src={logo.src} alt="Your Company" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
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
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Seu time
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
                              team.status === "off" && "bg-gray-800",
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
                  <Cog6ToothIcon
                    className="h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default LargeScreen;
