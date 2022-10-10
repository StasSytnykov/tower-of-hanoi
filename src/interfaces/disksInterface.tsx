export interface IDisksPegsListProps {
  pegDisks: number[];
  setPegDisks: (prevState: (prevState: number[]) => number[]) => void;
  tookDisk: number;
  setTookDisk: (arg: number) => void;
}
