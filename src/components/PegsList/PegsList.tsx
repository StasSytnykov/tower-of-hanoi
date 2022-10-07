import { useState } from "react";
import styles from "./PegsList.module.css";
import { findLastIndex } from "../../utils/findLastIndex";
import { SourceDisksList } from "./DisksLists/SourceDisksList";

export const PegsList = () => {
  const [source, setSource] = useState<number[]>([3, 2, 1]);
  const [auxiliary, setAuxiliary] = useState<number[]>([]);
  const [destination, setDestination] = useState<number[]>([]);
  const [tookDisk, setTookDisk] = useState<number>(0);

  const onSetTookDisk = (arg: number) => setTookDisk(arg);

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
        <div onClick={onClickAuxiliaryPeg} className={styles.centerStick} />
        <div className={styles.bottomStick} />
      </li>
      <li>
        <div onClick={onClickDestinationPeg} className={styles.centerStick} />
        <div className={styles.bottomStick} />
      </li>
    </ul>
  );
};
