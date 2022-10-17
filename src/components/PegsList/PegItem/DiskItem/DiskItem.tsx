import { IDiskItemProps } from "../../../../interfaces/disksInterface";
import { DiskItemStyled } from "./DiskItem.styled";

export const DiskItem = ({ pegDisks }: IDiskItemProps) => (
  <>
    {pegDisks.map((item) => {
      return (
        <DiskItemStyled
          key={item.id}
          width={item.width}
          color={item.color}
          data-testid={"diskContainer"}
        />
      );
    })}
  </>
);
