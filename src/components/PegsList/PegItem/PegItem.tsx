import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import { PegItemPage } from "../../../pages/PegList/PegItem/PegItemPage";
import { DiskListPages } from "../../../pages/PegList/PegItem/DiskList/DiskListPages";

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
      <DiskListPages pegDisks={pegDisks}></DiskListPages>
    </PegItemPage>
  );
};
