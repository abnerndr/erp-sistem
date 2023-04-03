import Input from "@/components/common/Input";
import cep from "cep-promise";
import { ChangeEvent, useCallback, useState } from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { AddressProps } from "./types";
import { Controller } from "react-hook-form";

function Address({
  errors,
  control,
  setValue,
  register,
  clearErrors,
}: AddressProps) {
  const [cepErrorMessage, setCepErrorMessage] = useState<string | null>("");
  const [searchingCep, setSearchingCep] = useState<boolean>(false);
  console.log(searchingCep, "boo");
  const getCep = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault;
      const { value } = e.target;
      const cepNumber = value.replace(/[-\./]/gi, "");
      const cepLength = cepNumber?.length;

      if (cepLength !== 8) {
        setValue("cep", ""),
          setValue("city", ""),
          setValue("state", ""),
          setValue("street", ""),
          setValue("neighborhood", "");
        clearErrors();
      }
      if (cepLength === 8) {
        setSearchingCep(true);
        setTimeout(() => {
          cep(cepNumber)
            .then((data) => {
              console.log(data.city);
              setValue("cep", data.cep),
                setValue("city", data.city),
                setValue("state", data.state),
                setValue("street", data.street),
                setValue("neighborhood", data.neighborhood);
            })
            .catch((error) => {
              setCepErrorMessage(error?.message);
              setValue("cep", ""),
                setValue("city", ""),
                setValue("state", ""),
                setValue("street", ""),
                setValue("neighborhood", "");
              clearErrors();
              setSearchingCep(false);
            });
        }, 1000);
        setSearchingCep(false);
      }
    },
    [cep, setCepErrorMessage, setSearchingCep, setValue]
  );

  return (
    <>
      {cepErrorMessage && (
        <div className="mt-5 mb-2">
          <div className="w-full h-full rounded-lg bg-red-500 text-white px-3 py-4">
            <p className="text-sm font-medium leading-6 text-center">
              {cepErrorMessage}
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col mb-5">
        <div className="flex flex-row items-center w-full gap-x-3">
          <div className="w-[40%]">
            <Controller
              control={control}
              name="cep"
              render={({ field: { onChange, ...rest } }) => (
                <Input
                  id="cep"
                  type="text"
                  label="cep"
                  onChange={getCep}
                  placeholder="00000-000"
                  error={errors.cep?.message}
                  {...rest}
                />
              )}
            />
          </div>
          <div className="w-[50%]">
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, ...rest } }) => (
                <Input
                  id="city"
                  type="text"
                  label="cidade"
                  onChange={onChange}
                  disabled={searchingCep}
                  placeholder="São Paulo"
                  error={errors.city?.message}
                  {...rest}
                />
              )}
            />
          </div>
          <div className="w-[40%]">
            <Input
              id="state"
              type="text"
              label="estado"
              disabled={searchingCep}
              {...register("state")}
              placeholder="SP"
              error={errors.state?.message}
            />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-row items-center w-full gap-x-3">
          <div className="w-[70%]">
            <Input
              id="street"
              type="text"
              label="endereço/logradouro"
              disabled={searchingCep}
              {...register("street")}
              placeholder="Logradouro"
              error={errors.street?.message}
            />
          </div>
          <div className="w-[30%]">
            <Input
              id="number"
              type="text"
              label="número"
              disabled={searchingCep}
              {...register("number")}
              placeholder="60"
              error={errors.number?.message}
            />
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-row items-center w-full gap-x-3">
          <div className="w-[50%]">
            <Input
              id="neighborhood"
              type="text"
              label="bairro"
              disabled={searchingCep}
              {...register("neighborhood")}
              placeholder="vila aldermiro"
              error={errors.neighborhood?.message}
            />
          </div>
          <div className="w-[50%]">
            <Input
              id="complement"
              type="text"
              label="complemento"
              disabled={searchingCep}
              {...register("complement")}
              placeholder="casa, apto, etc..."
              error={errors.complement?.message}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
