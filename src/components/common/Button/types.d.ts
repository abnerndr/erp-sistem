export type ButtonProps = {
  type: "submit" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string | null;
  color: "primary" | "coral" | "success" | "dark";
};
