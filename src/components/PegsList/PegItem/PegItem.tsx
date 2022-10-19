import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { DiskList } from "./DiskList/DiskList";
import { PegItemPage } from "../../../pages/PegList/PegItem/PegItemPage";

export const PegItem = ({
  pegDisks,
  setPegDisks,
  tookDisk,
}: IDisksPegsListProps) => {
  const onClickPeg = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk);
  };
  return (
    <PegItemPage onClickPeg={onClickPeg}>
      <DiskList pegDisks={pegDisks}></DiskList>
    </PegItemPage>
  );
};
