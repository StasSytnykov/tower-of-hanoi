import { toast } from "react-toastify";
import { findLastIndex } from "../findLastIndex";
import { IDisk } from "../../interfaces/disksInterface";

export const notifyError = () =>
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

export const onErrorNotify = (tookDisk: { id: number }, pegDisks: IDisk[]) => {
  if (
    tookDisk.id !== 0 &&
    pegDisks.length !== 0 &&
    pegDisks[findLastIndex(pegDisks)].id > tookDisk.id
  ) {
    notifyError();
  }
};
