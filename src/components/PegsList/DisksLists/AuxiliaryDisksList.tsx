import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList } from "./DisksList.styled";
import { DiskItem } from "./DiskItem/DiskItem";

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
        <DiskItem pegDisks={pegDisks} />
      </DisksList>
    </ListThumb>
  );
};
