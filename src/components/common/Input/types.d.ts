import { ChangeEvent } from "react";

export type InputProps = {
  name?: string;
  id: string;
  label: string;
  type: "text" | "password" | "email" | "number" | "tel" | "hidden";
  placeholder: string;
  error: string | undefined;
  register: {};
  onChange?: (e: HTMLInputElement<ChangeEvent>) => {};
};
