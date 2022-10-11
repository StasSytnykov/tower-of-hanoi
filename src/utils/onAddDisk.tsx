import { IPegs } from "../interfaces/disksInterface";
import { findLastIndex } from "./findLastIndex";

export const onAddDisk = (
  sourceDisks: IPegs[],
  setSourceDisks: (prevState: IPegs[]) => void
) => {
  const lastDiskInStartPeg = sourceDisks[findLastIndex(sourceDisks)];

  setSourceDisks([
    ...sourceDisks,
    {
      width: lastDiskInStartPeg.width - 20,
      id: lastDiskInStartPeg.id + 1,
      startPegId: 1,
    },
  ]);
};
