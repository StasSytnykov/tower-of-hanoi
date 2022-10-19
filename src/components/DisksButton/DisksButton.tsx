import { onAddDisk } from "../../utils/onAddDisk";
import { onDeleteDisk } from "../../utils/onDeleteDisk";
import { IButtonProps } from "../../interfaces/buttonInterfaces";
import { DisksButtonThumb } from "./DisksButton.styled";
import { Button } from "../../pages/Button/Button";

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
    <DisksButtonThumb>
      <Button
        variant={"primary"}
        onClick={onHandlePlusBtnClick}
        disabled={isDisabledButton}
        children={"+1 disk"}
      />
      <Button
        variant={"secondary"}
        onClick={onHandleMinusBtnClick}
        disabled={isDisabledButton}
        children={"-1 disk"}
      />
    </DisksButtonThumb>
  );
};
