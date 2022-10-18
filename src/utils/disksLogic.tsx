// import { onErrorNotify } from "./notifyLogic/onErrorNotify";
// import { onTookDisk } from "./onTookDisk";
// import { onPopDisk } from "./onPopDisk";
// import { onMoveDisk } from "./onMoveDisk";
import { IDisk } from "../interfaces/disksInterface";
import { findLastIndex } from "./findLastIndex";

export const disksLogic = (
  pegDisks: IDisk[],
  setPegDisks: (
    value:
      | ((prevState: {
          destinationPegDisks: IDisk[];
          sourcePegDisks: IDisk[];
          auxiliaryPegDisks: IDisk[];
          tookDisk: IDisk;
        }) => {
          destinationPegDisks: IDisk[];
          sourcePegDisks: IDisk[];
          auxiliaryPegDisks: IDisk[];
          tookDisk: IDisk;
        })
      | {
          destinationPegDisks: IDisk[];
          sourcePegDisks: IDisk[];
          auxiliaryPegDisks: IDisk[];
          tookDisk: IDisk;
        }
  ) => void,
  tookDisk: IDisk
) => {
  // onTookDisk(pegDisks, tookDisk.id, setPegDisks);

  //On took disk
  if (pegDisks[findLastIndex(pegDisks)] !== undefined && tookDisk.id === 0) {
    setPegDisks((prevState) => {
      return {
        ...prevState,
        tookDisk: { ...pegDisks[findLastIndex(pegDisks)] },
      };
    });
  }

  //On pop disk
  // onPopDisk(tookDisk.id, setPegDisks);
  if (tookDisk.id === 0) {
    setPegDisks((prevState) => {
      const newPegs = [...pegDisks];
      newPegs.pop();
      switch (pegDisks[0].peg) {
        case "source":
          return { ...prevState, sourcePegDisks: [...newPegs] };
        case "auxiliary":
          return { ...prevState, auxiliaryPegDisks: [...newPegs] };
        default:
          return { ...prevState, destinationPegDisks: [...newPegs] };
      }
    });
  }

  // onMoveDisk(pegDisks, setPegDisks, tookDisk);
  //On move disk
  setPegDisks((prevState) => {
    if (
      tookDisk.id !== 0 &&
      (pegDisks.length === 1 ||
        pegDisks[findLastIndex(pegDisks)].id < tookDisk.id)
    ) {
      const newPegs = [...pegDisks];
      newPegs.push(tookDisk);
      // setTookDisk({ width: 0, id: 0, color: "" });

      switch (pegDisks[0].peg) {
        case "source":
          return {
            ...prevState,
            sourcePegDisks: [...newPegs],
            tookDisk: { peg: "", width: 0, id: 0, color: "" },
          };
        case "auxiliary":
          return {
            ...prevState,
            auxiliaryPegDisks: [...newPegs],
            tookDisk: { peg: "", width: 0, id: 0, color: "" },
          };
        default:
          return {
            ...prevState,
            destinationPegDisks: [...newPegs],
            tookDisk: { peg: "", width: 0, id: 0, color: "" },
          };
      }
    }

    return { ...prevState };
  });
};

// onErrorNotify(tookDisk, pegDisks);
