import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import styles from "./DisksList.module.css";

export const AuxiliaryDisksList = ({
  pegs,
  setPegs,
  tookDisk,
  setTookDisk,
}: IDisksPegsListProps) => {
  const onClickAuxiliaryPeg = () => {
    disksLogic(pegs, setPegs, tookDisk, setTookDisk);
  };

  return (
    <ul className={styles.disksList} onClick={onClickAuxiliaryPeg}>
      <li></li>
    </ul>
  );
};
