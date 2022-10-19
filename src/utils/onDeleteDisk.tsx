import { IDisk, TPegsState } from "./types";

export const onDeleteDisk = (
  sourceDisks: IDisk[],
  setSourceDisks: (prevState: (prevState: TPegsState) => TPegsState) => void
) => {
  if (sourceDisks.length > 4) {
    sourceDisks.length -= 1;
    setSourceDisks((prevState) => {
      return {
        ...prevState,
        sourcePegDisks: [...sourceDisks],
      };
    });
  }
};
