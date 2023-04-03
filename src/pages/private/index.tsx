import { useCallback } from "react";
import NewTeam from "@/components/pages/private/index/NewTeam";
import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import Router from "next/router";

const adminTeam = [
  {
    id: "1",
    name: "Tom Cook",
    office: "magament team",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    id: "2",
    name: "Alexi Walton",
    office: "administrator Bussiness",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function Index() {
  const handleAdminPage = useCallback(
    (id: string | null) => {
      return Router.push(`/private/home/${id}`);
    },
    [Router]
  );
  return (
    <div>
      <main className="mx-auto max-w-7xl">
        <div className="w-full mt-20 flex items-center mb-40">
          <button>
            <ArrowLeftIcon className="w-8 h-8 text-dark-500" />
          </button>
          <div className="flex justify-center mx-auto">
            <span className="text-2xl font-medium">meus times</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-x-10">
          {adminTeam.map((admin) =>
            admin ? (
              <div
                key={admin.id}
                className="w-52 h-72 bg-gray-100 rounded-lg py-8 px-8 cursor-pointer"
                onClick={() => handleAdminPage(admin.id)}
              >
                <div className="flex justify-center mb-4">
                  <img
                    alt={`user-${admin.imageUrl.length}`}
                    src={admin.imageUrl}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center text-center mb-10">
                  <span className=" text-lg font-medium text-dark-500">
                    {admin.name}
                  </span>
                  <span className=" text-sm text-dark-100">{admin.office}</span>
                </div>
                <div className="w-full flex justify-center items-end">
                  <ArrowRightCircleIcon className="w-7 h-7 text-dark-500" />
                </div>
              </div>
            ) : null
          )}

          <NewTeam />
        </div>
      </main>
    </div>
  );
}

export default Index;
