import { disksLogic } from "../../../utils/disksLogic";
import { ListThumb, DisksList } from "./DisksList.styled";
import { DiskItem } from "./DiskItem/DiskItem";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";

export const DestinationDisksList = ({
  pegDisks,
  setPegDisks,
  tookDisk,
  setTookDisk,
}: IDisksPegsListProps) => {
  const onClickDestinationPeg = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk, setTookDisk);
  };

  return (
    <ListThumb onClick={onClickDestinationPeg}>
      <DisksList>
        <DiskItem pegDisks={pegDisks} />
      </DisksList>
    </ListThumb>
  );
};