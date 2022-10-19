import { onErrorNotify } from "./onErrorNotify";
import { IDisk, TPegsState } from "./types";

export const disksLogic = (
  pegDisks: IDisk[],
  setPegDisks: (
    value: ((prevState: TPegsState) => TPegsState) | TPegsState
  ) => void,
  tookDisk: IDisk
) => {
  const currentPeg = `${pegDisks[0].peg}PegDisks`;

  //On took disk
  if (pegDisks[pegDisks.length - 1] !== undefined && tookDisk.id === 0) {
    setPegDisks((prevState) => {
      return {
        ...prevState,
        tookDisk: { ...pegDisks[pegDisks.length - 1] },
      };
    });
  }

  //On pop disk
  if (tookDisk.id === 0 && pegDisks.length > 1) {
    setPegDisks((prevState) => {
      const newPegs = [...pegDisks];
      newPegs.pop();
      return { ...prevState, [currentPeg]: [...newPegs] };
    });
  }

  //On move disk
  setPegDisks((prevState) => {
    if (
      tookDisk.id !== 0 &&
      (pegDisks.length === 1 || pegDisks[pegDisks.length - 1].id < tookDisk.id)
    ) {
      const newPegs = [...pegDisks];
      newPegs.push(tookDisk);

      return {
        ...prevState,
        [currentPeg]: [...newPegs],
        tookDisk: { peg: "", width: 0, id: 0, color: "" },
      };
    }

    return { ...prevState };
  });

  onErrorNotify(tookDisk, pegDisks);
};
