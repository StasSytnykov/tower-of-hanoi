import { HTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  disabled: boolean;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};
