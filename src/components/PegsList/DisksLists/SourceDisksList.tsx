import { findLastIndex } from "../../../utils/findLastIndex";
import { IDisksList } from "../../../interfaces/disksInterface";
import styles from "./DisksList.module.css";

export const SourceDisksList = ({
  source,
  setSource,
  tookDisk,
  setTookDisk,
}: IDisksList) => {
  const onDisksClick = () => {
    // Logic how took disk
    if (source[findLastIndex(source)] !== undefined && tookDisk === 0) {
      setTookDisk(source[findLastIndex(source)]);
    }

    // Logic how apply to pop disk
    if (tookDisk === 0) {
      setSource((prevState: number[]) => {
        const newSource = [...prevState];
        newSource.pop();

        return [...newSource];
      });
    }

    // Logic how add disk to pag and check disk for correctly
    setSource((prevState: number[]) => {
      if (
        tookDisk !== 0 &&
        (source.length === 0 || source[findLastIndex(source)] > tookDisk)
      ) {
        prevState.push(tookDisk);
        setTookDisk(0);
        return [...prevState];
      }
      return [...prevState];
    });
  };

  return (
    <ul onClick={onDisksClick} className={styles.disksList}>
      <li />
    </ul>
  );
};

// Logic how return disk for the start
// if (
//   auxiliary.length !== 0 &&
//   auxiliary[findLastIndex(auxiliary)] < tookDisk
// ) {
//   setSource((prevState1) => [...prevState1, tookDisk]);
//   setTookDisk(0);
// }
