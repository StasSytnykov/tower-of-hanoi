import { HTMLAttributes, ReactNode } from "react";

export interface IDisk {
  peg: string;
  width: number;
  id: number;
  color: string;
}

export type TPegsState = {
  destinationPegDisks: IDisk[];
  sourcePegDisks: IDisk[];
  auxiliaryPegDisks: IDisk[];
  tookDisk: IDisk;
};

export interface IDiskItemStyledProps {
  width: number;
  color: string;
  isHidden?: boolean;
}

export interface IBtnProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  disabled: boolean;
}
