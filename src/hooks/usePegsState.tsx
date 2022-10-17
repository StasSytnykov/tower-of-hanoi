import { useState } from "react";
import { useNotifyWin } from "./useNotifyWin";
import { onGetRandomColor } from "../utils/onGetRandomColor";
import { IPegs } from "../interfaces/disksInterface";

export const usePegsState = () => {
  const [sourceDisks, setSourceDisks] = useState<IPegs[]>([
    { width: 280, id: 1, color: onGetRandomColor() },
    { width: 260, id: 2, color: onGetRandomColor() },
    { width: 240, id: 3, color: onGetRandomColor() },
  ]);
  const [auxiliaryDisks, setAuxiliaryDisks] = useState<IPegs[]>([]);
  const [destinationDisks, setDestinationDisks] = useState<IPegs[]>([]);
  const [tookDisk, setTookDisk] = useState<IPegs>({
    width: 0,
    id: 0,
    color: "",
  });
  useNotifyWin(
    sourceDisks,
    auxiliaryDisks,
    tookDisk,
    setSourceDisks,
    setAuxiliaryDisks,
    setDestinationDisks,
    setTookDisk
  );

  return {
    sourceDisks,
    setSourceDisks,
    auxiliaryDisks,
    setAuxiliaryDisks,
    destinationDisks,
    setDestinationDisks,
    tookDisk,
    setTookDisk,
  };
};
