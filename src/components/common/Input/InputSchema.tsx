import * as y from "yup";
import "yup-phone";
import { cpf, cnpj } from "cpf-cnpj-validator";
import format from "date-fns/format";

let photo = y.mixed().optional().nullable();

let fullname = y
  .string()
  .required("o campo 'nome completo' é necessário.")
  .trim("O 'nome completo' não deverá conter espeços no começo e no final.")
  .matches(
    /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]* [A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]{2,})$/g,
    "o 'nome completo' não está valido."
  );

let name = y.string().required("o campo nome é necessário.").trim();

let title = y.string().required("o campo titulo é necessário.").trim();

let description = y
  .string()
  .required("É necessário que haja uma descrição")
  .trim();

let email = y
  .string()
  .email("o e-mail está não é valido.")
  .required("o campo de e-mail é necessário.")
  .trim();
let confirm_email = y
  .string()
  .oneOf([y.ref("email"), ""], "os e-mails não podem ser diferenetes.");

let password = y
  .string()
  .required("a senha é necessária.")
  .trim()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "a senha deve conter 8 caracteres sendo uma letra maiúscula, uma letra minúscula, um número e um caracter especial"
  );
let confirm_password = y
  .string()
  .oneOf([y.ref("password"), ""], "as senhas não podem ser diferentes.");

let cpf_validation = y
  .string()
  .required("o 'cpf' é necessário.")
  .matches(
    /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
    "cpf inválido!"
  )
  .test("validation_document", "cpf inválido!", (value) => cpf.isValid(value));

let cnpj_validation = y
  .string()
  .required("o 'cnpj' é necessário.")
  .matches(
    /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
    "cnpj inválido!"
  )
  .test("validation_document", "cnpj inválido!", (value) =>
    cnpj.isValid(value)
  );

let document_number = y
  .string()
  .required("É necessário informar um documento.")
  .test(
    "document_number is invalid",
    "número do documento está inválido!",
    (value) => (value.length === 11 ? cpf.isValid(value) : cnpj.isValid(value))
  );

let checkbox = y.boolean().oneOf([true], "É necessária a ativação do campo.");

const currentYear = format(new Date(), "yyyy");
const dateYear = Number(currentYear) - 18;
let birthdate = y
  .date()
  .nullable()
  .typeError("")
  .transform((curr, orig) => (orig === "" ? null : curr))
  .required("data de nascimento é indispensável.")
  .min(new Date(1920, 1, 1), "idade menor que o permitido pela plataforma.")
  .max(
    new Date(dateYear, 1, 1),
    "é necessário ser maior de idade para continuar."
  );

const phoneSchema = y.string().phone().required();
let cellphone = y
  .string()
  .transform((value) => value?.replace(/[^\d]/g, ""))
  .test(
    "validation_document",
    "O número informado não está listado em números existentes.",
    (value) => {
      return phoneSchema.isValid(`+55${value}`);
    }
  );

let tellphone = y
  .string()
  .required("é necessário inserir um telefone.")
  .test(
    "validation_document",
    "O número informado não está listado em números existentes.",
    (value) => {
      return phoneSchema.isValid(`+55${value}`);
    }
  );

//   credit card

let card_number = y
  .string()
  .required("O número do cartão é indispensável.")
  .transform((value) => value.replace(/[^\d]/g, ""))
  .min(16, "número invalido! siga o exemplo, XXXX XXXX XXXX XXXX");

let card_cvv = y
  .string()
  .required("O código do cartão é indispensável.")
  .transform((value) => value.replace(/[^\d]/g, ""))
  .min(3, "cvv invalido!, siga o exemplo, XXX ou XXXX");

let card_month = y
  .string()
  .required("mês é necessário.")
  .transform((value) => value.replace(/[^\d]/g, ""))
  .min(2, `mês inválido! exemplo ${format(new Date(), "MM")}!`);

let card_year = y
  .string()
  .required("ano é necessário.")
  .transform((value) => value.replace(/[^\d]/g, ""))
  .min(4, `ano inválido! exemplo ${format(new Date(), "YY")}!`);

//   address

let address_zipcode = y
  .string()
  .required("cep inserido não é válido.")
  .transform((value) => value.replace(/[^\d]/g, ""))
  .min(8, "cep inválido! exemplo, XXXXX-XXX");

let address_street = y.string().required("o campo logradouro é necessário.");
let address_neighborhood = y
  .string()
  .required("o campo logradouro é necessário.");
let address_number = y
  .string()
  .required("o campo número da residencia é necessário.");
let address_city = y.string().required("O campo cidade é necessário.").trim();
let address_state = y
  .string()
  .required("O campo estado é necessário.")
  .matches(/[a-zA-Z]/, "são permitidas somente letras neste campo");

export {
  photo,
  fullname,
  name,
  title,
  description,
  email,
  confirm_email,
  password,
  confirm_password,
  cpf_validation,
  cnpj_validation,
  document_number,
  checkbox,
  birthdate,
  cellphone,
  tellphone,
  card_number,
  card_cvv,
  card_month,
  card_year,
  address_zipcode,
  address_street,
  address_neighborhood,
  address_number,
  address_city,
  address_state,
};
