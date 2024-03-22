import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  icon: string;
}

const Button = ({ children, onClick, color = "primary", icon }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} type="button">
      <i className={"bi " + icon}></i>
      {children}
    </button>
  );
};

export default Button;
