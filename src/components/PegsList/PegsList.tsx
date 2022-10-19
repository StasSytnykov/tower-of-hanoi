import { usePegsState } from "../../hooks/usePegsState";
import { PegsListPage } from "../../pages/PegList/PegsListPage";
import { PegItemPage } from "../../pages/PegList/PegItem/PegItemPage";

export const PegsList = () => {
  const { pegDisks, setPegDisks } = usePegsState();
  const pegDisksKeys = Object.keys(pegDisks) as Array<keyof typeof pegDisks>;
  console.log(pegDisksKeys);

  return (
    <PegsListPage pegDisks={pegDisks} setPegDisks={setPegDisks}>
      {pegDisksKeys.map((item) => {
        if (item !== "tookDisk") {
          console.log(pegDisks[item]);
          return (
            <PegItemPage
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
