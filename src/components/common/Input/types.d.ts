import { ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export type InputProps = {
  value?: T;
  name?: string;
  id: string;
  label: string;
  type: "text" | "password" | "email" | "number" | "tel" | "hidden";
  disabled?: boolean;
  placeholder: string;
  error: string | undefined;
  register?: UseFormRegister<T>;
  onChange?: (...e: T[]) => void;
};

export type InputDateProps = {
  name?: string;
  id: string;
  label: string;
  type: "text" | "date";
  placeholder?: string;
  error: string | undefined;
  register?: UseFormRegister<T>;
  onChange?: (e: HTMLInputElement<ChangeEvent>) => {};
};

export type InputUrlProps = {
  name?: string;
  id: string;
  label: string;
  type: "text";
  placeholder?: string;
  error: string | undefined;
  urlLocal?: boolean;
  register?: UseFormRegister<T>;
  onChange?: (e: HTMLInputElement<ChangeEvent>) => {};
};
