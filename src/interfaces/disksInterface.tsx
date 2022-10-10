export interface IDisksPegsListProps {
  pegs: number[];
  setPegs: (prevState: (prevState: number[]) => number[]) => void;
  tookDisk: number;
  setTookDisk: (arg: number) => void;
}
