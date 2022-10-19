import { ButtonStyled } from "./Button.styled";
import { IBtnProps } from "../../utils/types";

export const Button = ({ children, ...props }: IBtnProps) => {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};
