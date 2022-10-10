import { findLastIndex } from "./findLastIndex";

export const disksLogic = (
  pegDisks: number[],
  setPegs: (prevState: (prevState: number[]) => number[]) => void,
  tookDisk: number,
  setTookDisk: (arg: number) => void
) => {
  //Logic how took disk
  if (pegDisks[findLastIndex(pegDisks)] !== undefined && tookDisk === 0) {
    setTookDisk(pegDisks[findLastIndex(pegDisks)]);
  }

  //Logic how apply to pop disk
  if (tookDisk === 0) {
    setPegs((prevState) => {
      const newPegs = [...prevState];
      newPegs.pop();

      return [...newPegs];
    });
  }

  //Logic how add disk to pag and check disk for correctly
  setPegs((prevState) => {
    if (
      tookDisk !== 0 &&
      (pegDisks.length === 0 || pegDisks[findLastIndex(pegDisks)] > tookDisk)
    ) {
      prevState.push(tookDisk);
      setTookDisk(0);
      return [...prevState];
    }
    return [...prevState];
  });
};
