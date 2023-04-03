import { Layout } from "@/components/layout";
import CustomerList from "@/components/pages/private/customer/CustomerList";
import CustomerModal from "@/components/pages/private/customer/CustomerModal";
import { useCallback, useState } from "react";

const customer = [
  {
    id: "1",
    name: "Courtney Henry",
    email: "courtney.henry@email.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    document_number: "229.452.830-18",
    city: "São Paulo - SP",
    phone: "11995220023",
    is_active: true,
  },
  {
    id: "2",
    name: "Tom Cook",
    email: "tom.cook@email.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    document_number: "96.731.839/0001-79",
    phone: "14997830234",
    city: "Cuiabá - SP",
    is_active: true,
  },
  {
    id: "3",
    name: "Floyd Miles",
    email: "floyd.miled@email.com",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    document_number: "92.761.803/0001-87",
    phone: "23991239923",
    city: "Campinas - SP",
    is_active: true,
  },
];

function List() {
  const [openModalForm, setOpenModalForm] = useState<boolean>(false);

  const handleOpenModalForm = useCallback(() => {
    setOpenModalForm(true);
  }, [setOpenModalForm]);
  return (
    <>
      <Layout withHeader title="clientes e fornecedores">
        <div>
          <CustomerList list={customer} openModal={handleOpenModalForm} />
        </div>
      </Layout>
      <CustomerModal open={openModalForm} setOpen={setOpenModalForm} />
    </>
  );
}

export default List;
