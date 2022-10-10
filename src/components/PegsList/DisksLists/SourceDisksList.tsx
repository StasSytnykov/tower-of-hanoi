import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import styles from "./DisksList.module.css";

export const SourceDisksList = ({
  pegs,
  setPegs,
  tookDisk,
  setTookDisk,
}: IDisksPegsListProps) => {
  const onDisksClick = () => {
    disksLogic(pegs, setPegs, tookDisk, setTookDisk);
  };

  return (
    <ul onClick={onDisksClick} className={styles.disksList}>
      <li />
    </ul>
  );
};
