import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList, DisksItem } from "./DisksList.styled";

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
        {pegDisks.map((item) => (
          <DisksItem key={item} />
        ))}
      </DisksList>
    </ListThumb>
  );
};
