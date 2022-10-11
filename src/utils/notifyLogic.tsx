import { toast } from "react-toastify";
import { findLastIndex } from "./findLastIndex";
import { IPegs } from "../interfaces/disksInterface";

const notify = () =>
  toast.error("Wow it's wrong move! Try again!", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export const onNotify = (tookDisk: { id: number }, pegDisks: IPegs[]) => {
  if (
    tookDisk.id !== 0 &&
    pegDisks.length !== 0 &&
    pegDisks[findLastIndex(pegDisks)].id > tookDisk.id
  ) {
    notify();
  }
};
