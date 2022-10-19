import { onAddDisk } from "../../utils/onAddDisk";
import { onDeleteDisk } from "../../utils/onDeleteDisk";
import { IButtonProps } from "../../interfaces/buttonInterfaces";
import { DisksButtonPage } from "../../pages/DisksButton/DisksButtonPage";

export const DisksButton = ({ pegDisks, setPegDisks }: IButtonProps) => {
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
    <DisksButtonPage
      isDisabledButton={isDisabledButton}
      onHandleMinusBtnClick={onHandleMinusBtnClick}
      onHandlePlusBtnClick={onHandlePlusBtnClick}
    />
  );
};
