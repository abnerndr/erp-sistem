import {
  FieldErrors,
  UseFormSetValue,
  UseFormRegister,
  UseFormClearErrors,
  Control,
} from "react-hook-form";
import { CustomerForm } from "../../pages/private/customer/types";

export type AddressProps = {
  errors: FieldErrors<CustomerForm>;
  control: Control<CustomerForm, T>;
  setValue: UseFormSetValue<CustomerForm>;
  clearErrors: UseFormClearErrors<CustomerForm>;
  register: UseFormRegister<CustomerForm>;
};
