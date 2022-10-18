import { useEffect } from "react";
import { IDisk } from "../interfaces/disksInterface";
import { initialState } from "../data/data";
import { toast } from "react-toastify";

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
      sourcePegDisks.length === 1 &&
      auxiliaryPegDisks.length === 1 &&
      tookDisk.id === 0
    ) {
      setPegDisks(initialState);

      toast("Wow, you are amazing congratulations on the victory");
    }
  };

  useEffect(() => {
    onWinGame();
  }, [onWinGame]);
};
