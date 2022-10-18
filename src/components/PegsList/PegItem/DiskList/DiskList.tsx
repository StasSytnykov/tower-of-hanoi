import { IDiskItemProps } from "../../../../interfaces/disksInterface";
import { DiskItem } from "./DiskItem";
import { DisksListStyled } from "./DiskList.styled";

export const DiskList = ({ pegDisks }: IDiskItemProps) => (
  <DisksListStyled>
    {pegDisks.map((item) => (
      <DiskItem
        data-testid="custom-element"
        key={item.id}
        width={item.width}
        color={item.color}
      />
    ))}
  </DisksListStyled>
);
