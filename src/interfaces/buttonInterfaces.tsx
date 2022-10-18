import { IDisk } from "./disksInterface";
import { HTMLAttributes, ReactNode } from "react";

export interface IButtonProps {
  pegDisks: {
    destinationPegDisks: IDisk[];
    sourcePegDisks: IDisk[];
    auxiliaryPegDisks: IDisk[];
    tookDisk: IDisk;
  };
  setPegDisks: (
    value:
      | ((prevState: {
          destinationPegDisks: IDisk[];
          sourcePegDisks: IDisk[];
          auxiliaryPegDisks: IDisk[];
          tookDisk: IDisk;
        }) => {
          destinationPegDisks: IDisk[];
          sourcePegDisks: IDisk[];
          auxiliaryPegDisks: IDisk[];
          tookDisk: IDisk;
        })
      | {
          destinationPegDisks: IDisk[];
          sourcePegDisks: IDisk[];
          auxiliaryPegDisks: IDisk[];
          tookDisk: IDisk;
        }
  ) => void;
}

export interface IBtnProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  disabled: boolean;
}
