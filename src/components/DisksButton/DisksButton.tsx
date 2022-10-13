import { onAddDisk } from "../../utils/onAddDisk";
import { onDeleteDisk } from "../../utils/onDeleteDisk";
import { IButtonProps } from "../../interfaces/buttonInterfaces";
import { DisksButtonThumb } from "./DisksButton.styled";
import { Button } from "../Button/Button";

export const DisksButton = ({
  tookDisk,
  sourceDisks,
  auxiliaryDisks,
  destinationDisks,
  setSourceDisks,
}: IButtonProps) => {
  const onHandlePlusBtnClick = () => {
    onAddDisk(sourceDisks, setSourceDisks);
  };

  const onHandleMinusBtnClick = () => {
    onDeleteDisk(sourceDisks, setSourceDisks);
  };

  const isDisabledButton =
    !!auxiliaryDisks.length || !!destinationDisks.length || !!tookDisk.id;

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