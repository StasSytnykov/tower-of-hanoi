import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList } from "./PegItem.styled";
import { DiskItem } from "./DiskItem/DiskItem";

export const PegItem = ({
  pegDisks,
  setPegDisks,
  tookDisk,
}: IDisksPegsListProps) => {
  const onClickPeg = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk);
  };
  return (
    <ListThumb onClick={onClickPeg}>
      <DisksList>
        <DiskItem pegDisks={pegDisks} />
      </DisksList>
    </ListThumb>
  );
};
