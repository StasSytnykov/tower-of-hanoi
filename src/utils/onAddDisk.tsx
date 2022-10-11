import { IPegs } from "../interfaces/disksInterface";
import { findLastIndex } from "./findLastIndex";
import { onGetRandomColor } from "./onGetRandomColor";

export const onAddDisk = (
  sourceDisks: IPegs[],
  setSourceDisks: (prevState: IPegs[]) => void
) => {
  const lastDiskInStartPeg = sourceDisks[findLastIndex(sourceDisks)];

  if (lastDiskInStartPeg.width !== 40) {
    setSourceDisks([
      ...sourceDisks,
      {
        width: lastDiskInStartPeg.width - 20,
        id: lastDiskInStartPeg.id + 1,
        startPegId: 1,
        color: onGetRandomColor(),
      },
    ]);
  }
};
