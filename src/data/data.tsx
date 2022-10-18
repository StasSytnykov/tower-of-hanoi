import { onGetRandomColor } from "../utils/onGetRandomColor";

export const initialState = {
  sourcePegDisks: [
    {
      peg: "source",
      width: 0,
      id: 0,
      color: "",
    },
    { peg: "", width: 280, id: 1, color: onGetRandomColor() },
    { peg: "", width: 260, id: 2, color: onGetRandomColor() },
    { peg: "", width: 240, id: 3, color: onGetRandomColor() },
  ],
  auxiliaryPegDisks: [
    {
      peg: "auxiliary",
      width: 0,
      id: 0,
      color: "",
    },
  ],
  destinationPegDisks: [
    {
      peg: "destination",
      width: 0,
      id: 0,
      color: "",
    },
  ],
  tookDisk: {
    peg: "",
    width: 0,
    id: 0,
    color: "",
  },
};
