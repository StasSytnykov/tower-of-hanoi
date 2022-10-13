import { onErrorNotify } from "./notifyLogic/onErrorNotify";
import { onTookDisk } from "./onTookDisk";
import { onPopDisk } from "./onPopDisk";
import { onMoveDisk } from "./onMoveDisk";
import { IPegs } from "../interfaces/disksInterface";

export const disksLogic = (
  pegDisks: IPegs[],
  setPegs: (prevState: (prevState: IPegs[]) => IPegs[]) => void,
  tookDisk: IPegs,
  setTookDisk: (arg: { color: string; width: number; id: number }) => void
) => {
  onTookDisk(pegDisks, tookDisk.id, setTookDisk);

  onPopDisk(tookDisk.id, setPegs);

  onMoveDisk(pegDisks, setPegs, tookDisk, setTookDisk);

  onErrorNotify(tookDisk, pegDisks);
};
