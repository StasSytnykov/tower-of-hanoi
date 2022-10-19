import { usePegsState } from "../hooks/usePegsState";
import { PegsList } from "../components/PegsList/PegsList";
import { PegItem } from "../components/PegItem/PegItem";
import { DiskList } from "../components/DiskList/DiskList";
import { DisksButton } from "../components/DisksButton/DisksButton";
import { disksLogic } from "../utils/disksLogic";
import { onAddDisk } from "../utils/onAddDisk";
import { onDeleteDisk } from "../utils/onDeleteDisk";

export const PegsListPage = () => {
  const { pegDisks, setPegDisks } = usePegsState();
  const pegDisksKeys = Object.keys(pegDisks) as Array<keyof typeof pegDisks>;
  const onHandlePlusBtnClick = () => {
    onAddDisk(pegDisks.sourcePegDisks, setPegDisks);
  };

  const onHandleMinusBtnClick = () => {
    onDeleteDisk(pegDisks.sourcePegDisks, setPegDisks);
  };

  const isDisabledButton =
    pegDisks.auxiliaryPegDisks.length !== 1 ||
    pegDisks.destinationPegDisks.length !== 1 ||
    !!pegDisks.tookDisk.id;

  return (
    <>
      <PegsList>
        {pegDisksKeys.map((item) => {
          if (item !== "tookDisk") {
            const onClickPeg = () => {
              disksLogic(pegDisks[item], setPegDisks, pegDisks.tookDisk);
            };
            return (
              <PegItem onClickPeg={onClickPeg} key={pegDisks[item][0].peg}>
                <DiskList pegDisks={pegDisks[item]} />
              </PegItem>
            );
          }
        })}
      </PegsList>
      <DisksButton
        onHandlePlusBtnClick={onHandlePlusBtnClick}
        onHandleMinusBtnClick={onHandleMinusBtnClick}
        isDisabledButton={isDisabledButton}
      ></DisksButton>
    </>
  );
};
