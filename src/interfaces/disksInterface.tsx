export interface IDisk {
  peg: string;
  width: number;
  id: number;
  color: string;
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
}

export interface IDiskItemProps {
  pegDisks: IDisk[];
}
