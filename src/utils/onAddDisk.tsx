import { IDisk, TPegsState } from "./types";

import { onGetRandomColor } from "./onGetRandomColor";

export const onAddDisk = (
  sourceDisks: IDisk[],
  setSourceDisks: (prevState: (prevState: TPegsState) => TPegsState) => void
) => {
  const lastDiskInStartPeg = sourceDisks[sourceDisks.length - 1];

  if (lastDiskInStartPeg.width !== 40) {
    setSourceDisks((prevState) => {
      return {
        ...prevState,
        sourcePegDisks: [
          ...sourceDisks,
          {
            peg: "",
            width: lastDiskInStartPeg.width - 20,
            id: lastDiskInStartPeg.id + 1,
            color: onGetRandomColor(),
          },
        ],
      };
    });
  }
};
