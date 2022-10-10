import { IDiskItemProps } from "../../../../interfaces/disksInterface";
import { DiskItemStyled } from "./DiskItem.styled";

const diskWidth = 280;

export const DiskItem = ({ pegDisks }: IDiskItemProps) => {
  return (
    <>
      {pegDisks.map((item, index, array) => {
        array.indexOf(item);
        return <DiskItemStyled key={item} width={diskWidth} />;
      })}
    </>
  );
};
