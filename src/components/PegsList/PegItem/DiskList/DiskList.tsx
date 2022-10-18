import { IDiskItemProps } from "../../../../interfaces/disksInterface";
import { DisksListStyled, DiskItemStyled } from "./DiskList.styled";

export const DiskList = ({ pegDisks }: IDiskItemProps) => (
  <DisksListStyled>
    {pegDisks.map((item) => (
      <DiskItemStyled
        data-testid="custom-element"
        key={item.id}
        width={item.width}
        color={item.color}
      />
    ))}
  </DisksListStyled>
);
