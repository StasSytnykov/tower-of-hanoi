export interface IDisksList {
  source: number[];
  setSource: (prevState: (prevState: number[]) => number[]) => void;
  tookDisk: number;
  setTookDisk: (arg: number) => void;
}
