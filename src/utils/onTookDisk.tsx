import { findLastIndex } from "./findLastIndex";
import { IPegs } from "../interfaces/disksInterface";

export const onTookDisk = (
  pegDisks: IPegs[],
  tookDiskId: number,
  setTookDisk: (arg: { color: string; width: number; id: number }) => void
) => {
  if (pegDisks[findLastIndex(pegDisks)] !== undefined && tookDiskId === 0) {
    setTookDisk({
      ...pegDisks[findLastIndex(pegDisks)],
    });
  }
};
