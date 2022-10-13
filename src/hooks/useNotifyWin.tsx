import { onWinNotify } from "../utils/notifyLogic/onWinNotify";
import { useEffect } from "react";
import { onGetRandomColor } from "../utils/onGetRandomColor";
import { IPegs } from "../interfaces/disksInterface";

export const useNotifyWin = (
  sourceDisks: IPegs[],
  auxiliaryDisks: IPegs[],
  tookDisk: IPegs,
  setSourceDisks: ([]) => void,
  setAuxiliaryDisks: ([]) => void,
  setDestinationDisks: ([]) => void,
  setTookDisk: (arg: IPegs) => void
) => {
  const onWinGame = () => {
    if (
      sourceDisks.length === 0 &&
      auxiliaryDisks.length === 0 &&
      tookDisk.id === 0
    ) {
      setTimeout(() => {
        setSourceDisks([
          { width: 280, id: 1, color: onGetRandomColor() },
          { width: 260, id: 2, color: onGetRandomColor() },
          { width: 240, id: 3, color: onGetRandomColor() },
        ]);
        setAuxiliaryDisks([]);
        setDestinationDisks([]);
        setTookDisk({
          width: 0,
          id: 0,
          color: "",
        });
      }, 5000);

      onWinNotify(sourceDisks, auxiliaryDisks, tookDisk);
    }
  };

  useEffect(() => {
    onWinGame();
  }, [onWinGame]);
};
