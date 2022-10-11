export interface IPegs {
  width: number;
  id: number;
  startPegId: number;
  color: string;
}

export interface IDisksPegsListProps {
  startPegId: number;
  pegDisks: IPegs[];
  setPegDisks: (prevState: (prevState: IPegs[]) => IPegs[]) => void;
  tookDisk: IPegs;
  setTookDisk: (arg: IPegs) => void;
}

export interface IDisksDestinationProps extends IDisksPegsListProps {
  onWinNotify: () => void;
}

export interface IDiskItemStyledProps {
  width: number;
}

export interface IDiskItemProps {
  pegDisks: IPegs[];
}
