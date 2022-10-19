import { IDisk } from "../../utils/types";
import { DiskItem } from "../DiskItem/DiskItem";
import { DisksListStyled } from "./DiskList.styled";

interface Props {
  pegDisks: IDisk[];
}

export const DiskList = ({ pegDisks }: Props) => (
  <DisksListStyled>
    {pegDisks.map((item) => (
      <DiskItem key={item.id} width={item.width} color={item.color} />
    ))}
  </DisksListStyled>
);
