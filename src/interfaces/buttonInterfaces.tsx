import { IDisk } from "./disksInterface";
import { HTMLAttributes, ReactNode } from "react";

export interface IButtonProps {
  tookDisk: IDisk;
  sourceDisks: IDisk[];
  auxiliaryDisks: IDisk[];
  destinationDisks: IDisk[];
  setSourceDisks: (prevState: IDisk[]) => void;
}

export interface IBtnProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  disabled: boolean;
}
