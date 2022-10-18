// import { findLastIndex } from "./findLastIndex";
//
// export const onMoveDisk = (
//   pegDisks: IPegs[],
//   setPegs: (prevState: (prevState: IPegs[]) => IPegs[]) => void,
//   tookDisk: IPegs,
//   setTookDisk: (arg: { color: string; width: number; id: number }) => void
// ) => {
//   setPegs((prevState) => {
//     if (
//       tookDisk.id !== 0 &&
//       (pegDisks.length === 0 ||
//         pegDisks[findLastIndex(pegDisks)].id < tookDisk.id)
//     ) {
//       prevState.push(tookDisk);
//       setTookDisk({ width: 0, id: 0, color: "" });
//
//       return [...prevState];
//     }
//
//     return [...prevState];
//   });
// };
export {};
