import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  IdentificationIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import erplogo from "../../../assets/images/erp.png";

import { SidebarProps } from "./types";
import Mobile from "./components/Mobile";
import LargeScreen from "./components/LargeScreen";
import Navigation from "./components/Navigation";

const navigation = [
  {
    name: "home",
    icon: HomeIcon,
    current: false,
    module: "Home",
    href: "/private/home",
    permissions: ["ReadHome"],
  },
  {
    name: "cadastros",
    module: "Cadastros",
    icon: UserGroupIcon,
    current: false,
    children: [
      {
        name: "clientes/fornecedores",
        href: "/private/customer/list",
        permissions: ["ReadCustomers"],
      },
    ],
  },
];

const teams = [
  {
    id: 1,
    name: "Marcos Wilmore",
    office: "Administrator",
    imageUrl:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "on",
  },
  {
    id: 2,
    name: "Renata Sanchez",
    office: "Bussiness Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "off",
  },
  {
    id: 3,
    name: "Thiago Lawrense",
    office: "Asistent",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    status: "notdisturb",
  },
  {
    id: 3,
    name: "Lucas More",
    office: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "busy",
  },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function Sidebar({ children }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActive] = useState<string>("Home");

  useEffect(() => {
    Object.values(navigation).map((item) => setActive(item.name));
  }, [navigation]);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <Mobile
                    activeNav={activeNav}
                    navigation={navigation}
                    teams={teams}
                    logo={erplogo}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <LargeScreen
          activeNav={activeNav}
          navigation={navigation}
          teams={teams}
          logo={erplogo}
        />

        <div className="lg:pl-72">
          <Navigation
            userNavigation={userNavigation}
            setSidebarOpen={setSidebarOpen}
          />

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
