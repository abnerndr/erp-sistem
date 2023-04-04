import { UseFormRegister } from "react-hook-form";

export type AvatarProps = {
  label: string;
  id?: string;
  register?: UseFormRegister<T>;
  errors?: string | null;
  fileUrl?: string;
  buttonTitle: string;
  onChange?: (...event: T[]) => void;
};
