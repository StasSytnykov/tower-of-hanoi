import { usePegsState } from "../../hooks/usePegsState";
import { PegsListPage } from "../../pages/PegList/PegsListPage";
import { PegItem } from "./PegItem/PegItem";

export const PegsList = () => {
  const { pegDisks, setPegDisks } = usePegsState();
  const pegDisksKeys = Object.keys(pegDisks) as Array<keyof typeof pegDisks>;

  return (
    <PegsListPage pegDisks={pegDisks} setPegDisks={setPegDisks}>
      {pegDisksKeys.map((item) => {
        if (item !== "tookDisk") {
          return (
            <PegItem
              pegDisks={pegDisks[item]}
              setPegDisks={setPegDisks}
              tookDisk={pegDisks.tookDisk}
            />
          );
        }
      })}
    </PegsListPage>
  );
};
