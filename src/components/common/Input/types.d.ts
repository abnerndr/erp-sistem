import { ChangeEvent } from "react";

export type InputProps = {
  name?: string;
  id: string;
  label: string;
  type: "text" | "password" | "number" | "tel" | "hidden";
  placeholder: string;
  error: string;
  register: {};
  onChange?: (e: HTMLElement<ChangeEvent>) => {};
};
