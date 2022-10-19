import { usePegsState } from "../../hooks/usePegsState";
import { PegsListPage } from "../../pages/PegList/PegsListPage";
import { PegItem } from "./PegItem/PegItem";
import { DisksButton } from "../DisksButton/DisksButton";

export const PegsList = () => {
  const { pegDisks, setPegDisks } = usePegsState();
  const pegDisksKeys = Object.keys(pegDisks) as Array<keyof typeof pegDisks>;

  return (
    <>
      <PegsListPage>
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
      <DisksButton pegDisks={pegDisks} setPegDisks={setPegDisks}></DisksButton>
    </>
  );
};
