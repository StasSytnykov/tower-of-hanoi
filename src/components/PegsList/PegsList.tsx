import { useState } from "react";
import styles from "./PegsList.module.css";
import { findLastIndex } from "../../utils/findLastIndex";
import { SourceDisksList } from "./DisksLists/SourceDisksList";
// import { AuxiliaryDisksList } from "./DisksLists/AuxiliaryDisksList";

export const PegsList = () => {
  const [source, setSource] = useState<number[]>([3, 2, 1]);
  // const [auxiliary, setAuxiliary] = useState<number[]>([]);
  const [destination, setDestination] = useState<number[]>([]);
  const [tookDisk, setTookDisk] = useState<number>(0);

  const onSetTookDisk = (arg: number) => setTookDisk(arg);

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

    // //Logic how return disk for the start
    // if (
    //   destination.length !== 0 &&
    //   destination[findLastIndex(destination)] < tookDisk
    // ) {
    //   setSource((prevState1) => [...prevState1, tookDisk]);
    //   setTookDisk(0);
    // }
  };

  return (
    <ul className={styles.pegsList}>
      <li>
        <div className={styles.centerStick}>
          <SourceDisksList
            tookDisk={tookDisk}
            setTookDisk={onSetTookDisk}
            source={source}
            setSource={setSource}
          />
        </div>
        <div className={styles.bottomStick} />
      </li>
      <li>
        <div className={styles.centerStick}>
          {/*<AuxiliaryDisksList*/}
          {/*  tookDisk={tookDisk}*/}
          {/*  setTookDisk={onSetTookDisk}*/}
          {/*  auxiliary={auxiliary}*/}
          {/*  setAuxiliary={setAuxiliary}*/}
          {/*/>*/}
        </div>
        <div className={styles.bottomStick} />
      </li>
      <li>
        <div onClick={onClickDestinationPeg} className={styles.centerStick} />
        <div className={styles.bottomStick} />
      </li>
    </ul>
  );
};
