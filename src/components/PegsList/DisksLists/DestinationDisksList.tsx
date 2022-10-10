import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import styles from "./DisksList.module.css";

export const DestinationDisksList = ({
  pegs,
  setPegs,
  tookDisk,
  setTookDisk,
}: IDisksPegsListProps) => {
  const onClickDestinationPeg = () => {
    disksLogic(pegs, setPegs, tookDisk, setTookDisk);
  };
  return (
    <ul onClick={onClickDestinationPeg} className={styles.disksList}>
      <li></li>
    </ul>
  );
};
