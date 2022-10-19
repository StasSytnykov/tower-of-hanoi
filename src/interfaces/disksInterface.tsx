import { HTMLAttributes, ReactNode } from "react";
export interface IDisk {
  peg: string;
  width: number;
  id: number;
  color: string;
}

export interface IDisksPegsListPagesProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
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

export interface IDisksPegsListProps {
  pegDisks: IDisk[];
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
  tookDisk: IDisk;
}

export interface IDiskItemStyledProps {
  width: number;
  color: string;
  isHidden?: boolean;
}

export interface IDiskItemProps {
  pegDisks: IDisk[];
}
