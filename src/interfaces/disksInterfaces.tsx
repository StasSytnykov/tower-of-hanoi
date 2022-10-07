export interface IDisksSourceListProps {
  source: number[];
  setSource: (prevState: (prevState: number[]) => number[]) => void;
  tookDisk: number;
  setTookDisk: (arg: number) => void;
}

export interface IDisksAuxiliaryListProps {
  auxiliary: number[];
  setAuxiliary: (prevState: (prevState: number[]) => number[]) => void;
  tookDisk: number;
  setTookDisk: (arg: number) => void;
}

export interface IDisksDestinationProps {
  destination: number[];
  setDestination: (prevState: (prevState: number[]) => number[]) => void;
  tookDisk: number;
  setTookDisk: (arg: number) => void;
}
