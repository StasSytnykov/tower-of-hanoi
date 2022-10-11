import { IPegs } from "./disksInterface";

export interface IButton {
  sourceDisks: IPegs[];
  setSourceDisks: (prevState: IPegs[]) => void;
}
