import { findLastIndex } from "../../../utils/findLastIndex";
import { IDisksDestinationProps } from "../../../interfaces/disksInterfaces";
import styles from "./DisksList.module.css";

export const DestinationDisksList = ({
  destination,
  setDestination,
  tookDisk,
  setTookDisk,
}: IDisksDestinationProps) => {
  const onClickDestinationPeg = () => {
    //Logic how took disk
    if (
      destination[findLastIndex(destination)] !== undefined &&
      tookDisk === 0
    ) {
      setTookDisk(destination[findLastIndex(destination)]);
    }

    //Logic how apply to pop disk
    if (tookDisk === 0) {
      setDestination((prevState) => {
        const newAuxiliary = [...prevState];
        newAuxiliary.pop();

        return [...newAuxiliary];
      });
    }

    //Logic how add disk to pag and check disk for correctly
    setDestination((prevState) => {
      if (
        tookDisk !== 0 &&
        (destination.length === 0 ||
          destination[findLastIndex(destination)] > tookDisk)
      ) {
        prevState.push(tookDisk);
        setTookDisk(0);
        return [...prevState];
      }
      return [...prevState];
    });
  };
  return (
    <ul onClick={onClickDestinationPeg} className={styles.disksList}>
      <li></li>
    </ul>
  );
};
