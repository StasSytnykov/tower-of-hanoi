import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList } from "./DisksList.styled";
import { DiskItem } from "./DiskItem/DiskItem";

export const SourceDisksList = ({
  startPegId,
  pegDisks,
  setPegDisks,
  tookDisk,
  setTookDisk,
}: IDisksPegsListProps) => {
  const onDisksClick = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk, setTookDisk, startPegId);
  };

  return (
    <ListThumb onClick={onDisksClick}>
      <DisksList>
        <DiskItem pegDisks={pegDisks} />
      </DisksList>
    </ListThumb>
  );
};
