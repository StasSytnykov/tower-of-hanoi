import { DiskItemStyled } from "../DiskList/DiskList.styled";

export const DiskItem = ({ ...props }) => (
  <DiskItemStyled
    isHidden
    width={props.width}
    color={props.color}
    data-testid="custom-element"
  />
);
