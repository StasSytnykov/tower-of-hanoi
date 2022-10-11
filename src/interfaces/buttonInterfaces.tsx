import { IPegs } from "./disksInterface";

export interface IButtonProps {
  sourceDisks: IPegs[];
  setSourceDisks: (prevState: IPegs[]) => void;
}
