import Button from "@/components/common/Button";
import { maskOnlyDocument, maskPhone } from "@/utils/masks";
import { MinusCircleIcon, PencilIcon } from "@heroicons/react/24/outline";
import { CustomerListProps } from "./types";
import CustomerModal from "./CustomerModal";
import { useState } from "react";

function CustomerList({
  list,
  openModal,
  openModalForm,
  setOpenModalForm,
}: CustomerListProps) {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-dark-500">
              Clientes / Fornecedores
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              listagem de clientes do seu time e forcedores.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Button onClick={openModal} type={"button"} color={"primary"}>
              + Cliente ou Fornecedor
            </Button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-dark-500 sm:pl-0"
                    >
                      nome
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-dark-500"
                    >
                      cidade
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-dark-500"
                    >
                      info
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-dark-500"
                    >
                      estatus
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {list.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-dark-500">
                              {item.name}
                            </div>
                            <div className="text-gray-500">{item.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-dark-500">{item.city}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-dark-500">
                          {maskOnlyDocument(item.document_number)}
                        </div>
                        <div className="text-gray-500">
                          {maskPhone(item.phone)}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {!item.is_active ? (
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            inativo
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            ativo
                          </span>
                        )}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex items-center justify-end gap-x-3">
                        <a
                          href="#"
                          className="text-dark-500 hover:text-dark-400"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-red-500 hover:text-red-600">
                          <MinusCircleIcon className="w-6 h-6" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CustomerModal open={openModalForm} setOpen={setOpenModalForm} />ß
    </>
  );
}
export default CustomerList;
