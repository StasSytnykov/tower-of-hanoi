import { IDiskItemProps } from "../../../../interfaces/disksInterface";
import { DiskItemStyled } from "./DiskItem.styled";

export const DiskItem = ({ pegDisks }: IDiskItemProps) => {
  return (
    <>
      {pegDisks.map((item) => {
        return <DiskItemStyled key={item.id} width={item.width} />;
      })}
    </>
  );
};
