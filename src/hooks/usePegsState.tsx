import { useState } from "react";
import { useNotifyWin } from "./useNotifyWin";
import { initialState } from "../utils/initialState";

export const usePegsState = () => {
  const [pegDisks, setPegDisks] = useState(initialState);

  useNotifyWin(pegDisks, setPegDisks);

  return { pegDisks, setPegDisks };
};
