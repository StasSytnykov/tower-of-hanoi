import { IDisk } from "../interfaces/disksInterface";
import { findLastIndex } from "./findLastIndex";
import { onGetRandomColor } from "./onGetRandomColor";

export const onAddDisk = (
  sourceDisks: IDisk[],
  setSourceDisks: (prevState: IDisk[]) => void
) => {
  const lastDiskInStartPeg = sourceDisks[findLastIndex(sourceDisks)];

  if (lastDiskInStartPeg.width !== 40) {
    setSourceDisks([
      ...sourceDisks,
      {
        peg: "",
        width: lastDiskInStartPeg.width - 20,
        id: lastDiskInStartPeg.id + 1,
        color: onGetRandomColor(),
      },
    ]);
  }
};
