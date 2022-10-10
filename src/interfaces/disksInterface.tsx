export interface IDisksPegsListProps {
  pegDisks: number[];
  setPegDisks: (prevState: (prevState: number[]) => number[]) => void;
  tookDisk: number;
  setTookDisk: (arg: number) => void;
}

export interface IPegs {
  width: number;
  id: number;
}

export interface IDiskItemStyledProps {
  width: number;
}

export interface IDiskItemProps {
  pegDisks: number[];
}
