import { IPegs } from "../interfaces/disksInterface";

export const onDeleteDisk = (
  sourceDisks: IPegs[],
  setSourceDisks: (prevState: IPegs[]) => void
) => {
  if (sourceDisks.length > 3) {
    sourceDisks.length -= 1;
    setSourceDisks([...sourceDisks]);
  }
};
