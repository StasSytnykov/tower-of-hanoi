import { findLastIndex } from "../../../utils/findLastIndex";
import {IDisksAuxiliaryListProps} from "../../../interfaces/disksInterfaces";
import styles from './DisksList.module.css'

export const AuxiliaryDisksList = ({
  tookDisk,
  setTookDisk,
  auxiliary,
  setAuxiliary,
}: IDisksAuxiliaryListProps) => {
  const onClickAuxiliaryPeg = () => {
    //Logic how took disk
    if (auxiliary[findLastIndex(auxiliary)] !== undefined && tookDisk === 0) {
      setTookDisk(auxiliary[findLastIndex(auxiliary)]);
    }

    //Logic how apply to pop disk
    if (tookDisk === 0) {
      setAuxiliary((prevState) => {
        const newAuxiliary = [...prevState];
        newAuxiliary.pop();

        return [...newAuxiliary];
      });
    }

    //Logic how add disk to pag and check disk for correctly
    setAuxiliary((prevState) => {
      if (
        tookDisk !== 0 &&
        (auxiliary.length === 0 ||
          auxiliary[findLastIndex(auxiliary)] > tookDisk)
      ) {
        prevState.push(tookDisk);
        setTookDisk(0);
        return [...prevState];
      }
      return [...prevState];
    });

    //Logic how return disk for the start
    // if (
    //   auxiliary.length !== 0 &&
    //   auxiliary[findLastIndex(auxiliary)] < tookDisk
    // ) {
    //   setSource((prevState1) => [...prevState1, tookDisk]);
    //   setTookDisk(0);
    // }
  };

  return (
    <ul className={styles.disksList} onClick={onClickAuxiliaryPeg}>
      <li></li>
    </ul>
  );
};


