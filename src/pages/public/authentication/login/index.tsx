import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import { LoginForm } from "../types";

import erpLogo from "@/assets/images/erp.png";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginForm>();

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-16 w-auto"
                src={erpLogo.src}
                alt="Your Company"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-dark-500">
                Acesse a plataforma
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <Input
                    id="email"
                    type="email"
                    placeholder="jonhdoe@email.com"
                    label="E-mail de acesso"
                    register="email"
                    error={errors.email?.message}
                  />

                  <Input
                    id="password"
                    type="password"
                    placeholder="•••••••••"
                    label="Senha do usuário"
                    register="password"
                    error={errors.password?.message}
                  />

                  <div className="flex items-center justify-between">
                    <Checkbox
                      id="remember"
                      label="Lembrar senha"
                      register="remember"
                    />
                  </div>

                  <Button type="submit" color="primary">
                    acessar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://wallpapers.com/images/file/iridescent-blue-color-clean-4k-qgka36xmxw4wpdk9.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Login;
