import { DiskItemStyled } from "./DiskList.styled";

export const DiskItem = ({ ...props }) => (
  <DiskItemStyled {...props} width={props.width} color={props.color} />
);
