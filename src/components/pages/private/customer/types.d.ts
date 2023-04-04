export type CustomerListProps = {
  list: {
    id: string;
    name: string;
    email: string;
    image: string | undefined;
    document_number: string;
    phone: string;
    city: string;
    is_active: boolean;
  }[];
  setOpenModalForm: (_value: boolean) => void;
  openModalForm: boolean;
  openModal: () => void;
};

export type CustomerModalProps = {
  open: boolean;
  setOpen: (_value: boolean) => void;
};

export type CustomerForm = {
  fullname: string | null;
  fantasy_name: string | null;
  code: string | null;
  type_person: "physical_person" | "legal_person" | "others";
  document_number: string | null;
  tributal_code_type:
    | "IRPJ"
    | "CSLL"
    | "COFINS"
    | "IPI"
    | "ICMS"
    | "ITCMD"
    | "ISS"
    | "IPTU";
  customer_since: Date;
  contributor_type:
    | "physical_person"
    | "legal_person"
    | "company"
    | "transport_company";
  municipal_registration: string | null;
  is_incense: boolean;
  cep: string | null;
  state: string | null;
  city: string | null;
  street: string | null;
  complement: string | null;
  number: string | null;
  neighborhood: string | null;
  person_contacts: T[];
  phone: string | null;
  cellphone: string | null;
  email: string | null;
  website: string | null;
  teams_user: string | null;
  next_date: Date;
};
