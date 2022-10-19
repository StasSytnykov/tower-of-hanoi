import { useEffect } from "react";
import { TPegsState } from "../utils/types";
import { initialState } from "../utils/initialState";
import { toast } from "react-toastify";

export const useNotifyWin = (
  pegDisks: TPegsState,
  setPegDisks: (value: TPegsState) => void
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
