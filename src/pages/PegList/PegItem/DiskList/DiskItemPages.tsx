import { DiskItemStyled } from "./DiskListPages.styled";

export const DiskItemPages = ({ ...props }) => (
  <DiskItemStyled
    isHidden
    width={props.width}
    color={props.color}
    data-testid="custom-element"
  />
);
