import { onAddDisk } from "../../utils/onAddDisk";
import { onDeleteDisk } from "../../utils/onDeleteDisk";
import { IButtonProps } from "../../interfaces/buttonInterfaces";
import { DisksButtonThumb, DisksButton } from "./NumberOfDisks.styled";

export const NumberOfDisks = ({
  sourceDisks,
  setSourceDisks,
}: IButtonProps) => {
  const onHandlePlusBtnClick = () => {
    onAddDisk(sourceDisks, setSourceDisks);
  };

  const onHandleMinusBtnClick = () => {
    onDeleteDisk(sourceDisks, setSourceDisks);
  };
  return (
    <DisksButtonThumb>
      <DisksButton onClick={onHandlePlusBtnClick} type={"button"}>
        +1 disk
      </DisksButton>
      <DisksButton onClick={onHandleMinusBtnClick} type={"button"}>
        -1 disk
      </DisksButton>
    </DisksButtonThumb>
  );
};
