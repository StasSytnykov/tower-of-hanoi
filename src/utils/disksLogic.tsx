import { findLastIndex } from "./findLastIndex";

export const disksLogic = (
  pegs: number[],
  setPegs: (prevState: (prevState: number[]) => number[]) => void,
  tookDisk: number,
  setTookDisk: (arg: number) => void
) => {
  //Logic how took disk
  if (pegs[findLastIndex(pegs)] !== undefined && tookDisk === 0) {
    setTookDisk(pegs[findLastIndex(pegs)]);
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
      (pegs.length === 0 || pegs[findLastIndex(pegs)] > tookDisk)
    ) {
      prevState.push(tookDisk);
      setTookDisk(0);
      return [...prevState];
    }
    return [...prevState];
  });
};
