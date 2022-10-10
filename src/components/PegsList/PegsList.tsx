import { useState } from "react";
import styles from "./PegsList.module.css";
import { SourceDisksList } from "./DisksLists/SourceDisksList";
import { AuxiliaryDisksList } from "./DisksLists/AuxiliaryDisksList";
import { DestinationDisksList } from "./DisksLists/DestinationDisksList";

export const PegsList = () => {
  const [source, setSource] = useState<number[]>([3, 2, 1]);
  const [auxiliary, setAuxiliary] = useState<number[]>([]);
  const [destination, setDestination] = useState<number[]>([]);
  const [tookDisk, setTookDisk] = useState<number>(0);

  const onSetTookDisk = (arg: number) => setTookDisk(arg);

  return (
    <ul className={styles.pegsList}>
      <li>
        <div className={styles.centerStick}>
          <SourceDisksList
            tookDisk={tookDisk}
            setTookDisk={onSetTookDisk}
            pegs={source}
            setPegs={setSource}
          />
        </div>
        <div className={styles.bottomStick} />
      </li>
      <li>
        <div className={styles.centerStick}>
          <AuxiliaryDisksList
            tookDisk={tookDisk}
            setTookDisk={onSetTookDisk}
            pegs={auxiliary}
            setPegs={setAuxiliary}
          />
        </div>
        <div className={styles.bottomStick} />
      </li>
      <li>
        <div className={styles.centerStick}>
          <DestinationDisksList
            pegs={destination}
            setPegs={setDestination}
            tookDisk={tookDisk}
            setTookDisk={setTookDisk}
          />
        </div>
        <div className={styles.bottomStick} />
      </li>
    </ul>
  );
};
