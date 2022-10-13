import { ButtonStyled } from "./Button.styled";
import { IBtnProps } from "../../interfaces/buttonInterfaces";

export const Button = ({ children, ...props }: IBtnProps) => {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};
