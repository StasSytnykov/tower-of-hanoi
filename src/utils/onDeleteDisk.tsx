import { IDisk } from "../interfaces/disksInterface";

export const onDeleteDisk = (
  sourceDisks: IDisk[],
  setSourceDisks: (
    prevState: (prevState: {
      destinationPegDisks: IDisk[];
      sourcePegDisks: IDisk[];
      auxiliaryPegDisks: IDisk[];
      tookDisk: IDisk;
    }) => {
      destinationPegDisks: IDisk[];
      sourcePegDisks: IDisk[];
      auxiliaryPegDisks: IDisk[];
      tookDisk: IDisk;
    }
  ) => void
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
