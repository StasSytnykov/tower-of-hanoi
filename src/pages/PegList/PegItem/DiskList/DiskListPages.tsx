import { IDiskItemProps } from "../../../../interfaces/disksInterface";
import { DiskItemPages } from "./DiskItemPages";
import { DisksListStyled } from "./DiskListPages.styled";

export const DiskListPages = ({ pegDisks }: IDiskItemProps) => (
  <DisksListStyled>
    {pegDisks.map((item) => (
      <DiskItemPages key={item.id} width={item.width} color={item.color} />
    ))}
  </DisksListStyled>
);
