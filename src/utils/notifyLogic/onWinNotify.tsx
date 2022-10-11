import { toast } from "react-toastify";
import { IPegs } from "../../interfaces/disksInterface";

export const onWinNotify = (
  sourceDisks: IPegs[],
  auxiliaryDisks: IPegs[],
  tookDisk: IPegs
) => {
  if (
    sourceDisks.length === 0 &&
    auxiliaryDisks.length === 0 &&
    tookDisk.id === 0
  ) {
    toast("Wow, you are amazing congratulations on the victory");
  }
};
