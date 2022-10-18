import { onWinNotify } from "../utils/notifyLogic/onWinNotify";
import { useEffect } from "react";
import { IDisk } from "../interfaces/disksInterface";
import { initialState } from "../data/data";

export const useNotifyWin = (
  pegDisks: {
    destinationPegDisks: IDisk[];
    sourcePegDisks: IDisk[];
    auxiliaryPegDisks: IDisk[];
    tookDisk: IDisk;
  },
  setPegDisks: (value: {
    destinationPegDisks: IDisk[];
    sourcePegDisks: IDisk[];
    auxiliaryPegDisks: IDisk[];
    tookDisk: IDisk;
  }) => void
) => {
  const { sourcePegDisks, auxiliaryPegDisks, tookDisk } = pegDisks;
  const onWinGame = () => {
    if (
      sourcePegDisks.length === 0 &&
      auxiliaryPegDisks.length === 0 &&
      tookDisk.id === 0
    ) {
      setTimeout(() => {
        setPegDisks(initialState);
      }, 5000);

      onWinNotify(sourcePegDisks, auxiliaryPegDisks, tookDisk);
    }
  };

  useEffect(() => {
    onWinGame();
  }, [onWinGame]);
};
