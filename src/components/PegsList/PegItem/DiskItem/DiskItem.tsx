import { IDiskItemProps } from "../../../../interfaces/disksInterface";
import { DiskItemStyled } from "./DiskItem.styled";

export const DiskItem = ({ pegDisks }: IDiskItemProps) => (
  <>
    {pegDisks.map((item) => {
      return (
        <DiskItemStyled
          data-testid="custom-element"
          key={item.id}
          width={item.width}
          color={item.color}
        />
      );
    })}
  </>
);
