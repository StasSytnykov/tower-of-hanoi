import { IDisk } from "../interfaces/disksInterface";

export const onDeleteDisk = (
  sourceDisks: IDisk[],
  setSourceDisks: (prevState: IDisk[]) => void
) => {
  if (sourceDisks.length > 3) {
    sourceDisks.length -= 1;
    setSourceDisks([...sourceDisks]);
  }
};
