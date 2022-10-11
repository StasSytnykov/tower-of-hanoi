import { findLastIndex } from "./findLastIndex";
import { IPegs } from "../interfaces/disksInterface";

export const disksLogic = (
  pegDisks: IPegs[],
  setPegs: (prevState: (prevState: IPegs[]) => IPegs[]) => void,
  tookDisk: IPegs,
  setTookDisk: (arg: { startPegId: number; width: number; id: number }) => void,
  startPegId: number
) => {
  //Logic how took disk
  if (pegDisks[findLastIndex(pegDisks)] !== undefined && tookDisk.id === 0) {
    setTookDisk({
      ...pegDisks[findLastIndex(pegDisks)],
      startPegId: startPegId,
    });
  }

  //Logic how apply to pop disk
  if (tookDisk.id === 0) {
    setPegs((prevState) => {
      const newPegs = [...prevState];
      newPegs.pop();

      return [...newPegs];
    });
  }

  //Logic how add disk to pag and check disk for correctly
  setPegs((prevState) => {
    if (
      tookDisk.id !== 0 &&
      (pegDisks.length === 0 ||
        pegDisks[findLastIndex(pegDisks)].id > tookDisk.id)
    ) {
      prevState.push(tookDisk);
      setTookDisk({ width: 0, id: 0, startPegId: 0 });
      return [...prevState];
    }
    return [...prevState];
  });
};
