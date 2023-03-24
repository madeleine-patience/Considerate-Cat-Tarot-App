import { ButtonHTMLAttributes } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

export default MyButtonProps;
