export type CheckboxProps = {
  id: string;
  name?: string;
  type?: "checkbox";
  label: strig | null;
  register?: {};
  onChange?: (e: HTMLInputElement<ChangeEvent>) => {};
};
