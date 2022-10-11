export interface IPegs {
  width: number;
  id: number;
}

export interface IDisksPegsListProps {
  pegDisks: IPegs[];
  setPegDisks: (prevState: (prevState: IPegs[]) => IPegs[]) => void;
  tookDisk: IPegs;
  setTookDisk: (arg: IPegs) => void;
}

export interface IDiskItemStyledProps {
  width: number;
}

export interface IDiskItemProps {
  pegDisks: IPegs[];
}
