import Modal from "@/components/common/Modal";
import { CustomerForm, CustomerModalProps } from "./types";
import Input from "@/components/common/Input";
import { useForm } from "react-hook-form";
import Select from "@/components/common/Select";
import { useState } from "react";
import Date from "@/components/common/Input/Date";
import Checkbox from "@/components/common/Checkbox";
import Address from "@/components/form/Address";

const personType = Object.values([
  { value: "physical_person", label: "Pessoa Fisíca" },
  { value: "legal_person", label: "Pessoa Juridica" },
  { value: "others", label: "Outro" },
]).map((item) => ({ value: item.value, label: item.label }));

const contributorType = Object.values([
  { value: "physical_person", label: "Pessoa Fisíca" },
  { value: "legal_person", label: "Pessoa Juridica" },
  { value: "company", label: "Empresa" },
  { value: "transport_company", label: "Empresa de Transporte" },
]).map((item) => ({ value: item.value, label: item.label }));

const tributalCodeType = Object.values([
  { value: "IRPJ", label: "IRPJ" },
  { value: "CSLL", label: "CSLL" },
  { value: "COFINS", label: "COFINS" },
  { value: "IPI", label: "IPI" },
  { value: "ICMS", label: "ICMS" },
  { value: "ITCMD", label: "ITCMD" },
  { value: "ISS", label: "ISS" },
  { value: "IPTU", label: "IPTU" },
]).map((item) => ({ value: item.value, label: item.label }));

function CustomerModal({ open, setOpen }: CustomerModalProps) {
  const [personSelected, setPersonSelected] = useState(personType[0]);
  const [tributalCodeSelected, setTributalCodeSelected] = useState(
    tributalCodeType[0]
  );
  const [contribuitorSelected, setContribuitorSelected] = useState(
    contributorType[0]
  );
  const {
    handleSubmit,
    control,
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<CustomerForm>();
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <form>
            <h2 className="text-base font-semibold leading-7 text-dark-500">
              Dados cadastrais
            </h2>
            <p className="mt-1 text-sm leading-6 text-dark-300">
              Preencha a baixo os dados cadastrais, pois são importantes para
              ter uma boa usuabilidade da plataforma.
            </p>
            {/* dados cadastrais */}
            <div className="flex flex-col mb-5">
              <div className="flex flex-row items-center w-full gap-x-3">
                <div className="w-[40%]">
                  <Input
                    id="fullname"
                    type="text"
                    label="nome completo"
                    {...register("fullname")}
                    placeholder="Jonh Doe"
                    error={errors.fullname?.message}
                  />
                </div>
                <div className="w-[40%]">
                  <Input
                    id="fantasy_name"
                    type="text"
                    label="nome fantasia"
                    {...register("fantasy_name")}
                    placeholder="Ice tea Company"
                    error={errors.fantasy_name?.message}
                  />
                </div>
                <div>
                  <Input
                    id="code"
                    type="text"
                    label="código"
                    {...register("code")}
                    placeholder="MT014AFa"
                    error={errors.code?.message}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center w-full gap-x-3">
                <div className="w-[20%]">
                  <Select
                    label="tipo de pessoa"
                    list={personType}
                    selected={personSelected}
                    setSelected={setPersonSelected}
                  />
                </div>
                <div className="w-[30%]">
                  <Input
                    id="document_number"
                    type="text"
                    label="cpf/cnpj"
                    {...register("document_number")}
                    placeholder="***421.234***"
                    error={errors.document_number?.message}
                  />
                </div>
                <div className="w-[20%]">
                  <Select
                    label="código tributário"
                    list={tributalCodeType}
                    selected={tributalCodeSelected}
                    setSelected={setTributalCodeSelected}
                  />
                </div>
                <div className="w-[40%]">
                  <Date
                    id="customer_since"
                    type="date"
                    label="cliente desde?"
                    register={register("customer_since")}
                    error={errors.customer_since?.message}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center w-full gap-x-3">
                <div className="w-[50%]">
                  <Select
                    label="código tributário"
                    list={contributorType}
                    selected={contribuitorSelected}
                    setSelected={setContribuitorSelected}
                  />
                </div>
                <div className="w-[50%]">
                  <Input
                    id="municipal_registration"
                    type="text"
                    label="inscrição municipal"
                    {...register("municipal_registration")}
                    placeholder="12381261230"
                    error={errors.municipal_registration?.message}
                  />
                </div>
              </div>
              <div className="w-full flex items-start mt-5">
                <Checkbox
                  id="is_incense"
                  label="insento de IE?"
                  register="is_incense"
                />
              </div>
            </div>
            <h2 className="text-base font-semibold leading-7 text-dark-500">
              Endereço
            </h2>
            <p className="mt-1 text-sm leading-6 text-dark-300">
              Preencha a baixo os dados de endereço, pois são importantes para
              ter uma boa usuabilidade da plataforma.
            </p>
            {/* endereço */}
            <Address
              errors={errors}
              control={control}
              register={register}
              setValue={setValue}
              clearErrors={clearErrors}
            />
            <h2 className="text-base font-semibold leading-7 text-dark-500">
              Contato
            </h2>
            <p className="mt-1 text-sm leading-6 text-dark-300">
              Preencha a baixo os dados de contato, pois são importantes para
              ter uma boa usuabilidade da plataforma.
            </p>
            {/* contato */}
            <div className="flex flex-col mb-5">
              <div className="flex flex-row items-center w-full gap-x-3">
                <div className="w-[100%]"></div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default CustomerModal;
