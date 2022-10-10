import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList, DisksItem } from "./DisksList.styled";

export const AuxiliaryDisksList = ({
  pegDisks,
  setPegDisks,
  tookDisk,
  setTookDisk,
}: IDisksPegsListProps) => {
  const onClickAuxiliaryPeg = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk, setTookDisk);
  };

  return (
    <ListThumb onClick={onClickAuxiliaryPeg}>
      <DisksList>
        {pegDisks.map((item) => (
          <DisksItem key={item} />
        ))}
      </DisksList>
    </ListThumb>
  );
};
