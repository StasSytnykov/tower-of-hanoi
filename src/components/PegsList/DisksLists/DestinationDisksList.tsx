// import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList } from "./DisksList.styled";
import { DiskItem } from "./DiskItem/DiskItem";

export const DestinationDisksList = ({
  pegDisks,
}: // setPegDisks,
// tookDisk,
// setTookDisk,
IDisksPegsListProps) => {
  const onClickDestinationPeg = () => {
    // disksLogic(pegDisks, setPegDisks, tookDisk, setTookDisk);
  };

  return (
    <ListThumb onClick={onClickDestinationPeg}>
      <DisksList>
        <DiskItem pegDisks={pegDisks} />
      </DisksList>
    </ListThumb>
  );
};