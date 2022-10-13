import { IPegs } from "./disksInterface";
import { HTMLAttributes, ReactNode } from "react";

export interface IButtonProps {
  tookDisk: IPegs;
  sourceDisks: IPegs[];
  auxiliaryDisks: IPegs[];
  destinationDisks: IPegs[];
  setSourceDisks: (prevState: IPegs[]) => void;
}

export interface IBtnProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  disabled: boolean;
}
