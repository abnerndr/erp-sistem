import cep from "cep-promise";
import { ChangeEvent, useCallback } from "react";

type ZipCodeProps = {
  cep: string | null;
  state: string | null;
  city: string | null;
  street: string | null;
  neighborhood: string | null;
};

export const getCep = useCallback(
  (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    const { value } = e.target;
    const cepNumber = value.replace(/[-\./]/gi, "");

    try {
      const data = cep(cepNumber, { timeout: 5000 });
      return data;
    } catch (error) {
      return error;
    }
  },
  [cep]
);
