import { toast } from "react-toastify";
import { IDisk } from "../../interfaces/disksInterface";

export const onWinNotify = (
  sourceDisks: IDisk[],
  auxiliaryDisks: IDisk[],
  tookDisk: IDisk
) => {
  if (
    sourceDisks.length === 0 &&
    auxiliaryDisks.length === 0 &&
    tookDisk.id === 0
  ) {
    toast("Wow, you are amazing congratulations on the victory");
  }
};
