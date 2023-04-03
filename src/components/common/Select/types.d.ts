export type SelectProps = {
  label: string;
  list: {
    value: string | null;
    label: string | null;
  }[];
  selected: list;
  setSelected: Dispatch<list>;
};
