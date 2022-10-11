import { IPegs } from "./disksInterface";

export interface IButtonProps {
  tookDisk: IPegs;
  sourceDisks: IPegs[];
  auxiliaryDisks: IPegs[];
  destinationDisks: IPegs[];
  setSourceDisks: (prevState: IPegs[]) => void;
}
