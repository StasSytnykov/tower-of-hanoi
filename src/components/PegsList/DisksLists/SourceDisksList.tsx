import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList, DisksItem } from "./DisksList.styled";

export const SourceDisksList = ({
  pegDisks,
  setPegDisks,
  tookDisk,
  setTookDisk,
}: IDisksPegsListProps) => {
  const onDisksClick = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk, setTookDisk);
  };

  return (
    <ListThumb onClick={onDisksClick}>
      <DisksList>
        {pegDisks.map((item) => (
          <DisksItem key={item} />
        ))}
      </DisksList>
    </ListThumb>
  );
};
